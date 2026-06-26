using CakeStudio.API.DbContexts.models;
using CakeStudio.Application.DTOs.Order;
using CakeStudio.Application.Interfaces;
using CakeStudio.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly CakeStudioDbContext _context;
        private readonly IUserContext _userContext;
        private readonly ICartRepository _cartRepository;
        private readonly IOrderRepository _orderRepository;
        public OrderService(CakeStudioDbContext context,IUserContext userContext,ICartRepository cartRepository,IOrderRepository orderRepo)
        {
            _context = context;
            _userContext = userContext;
            _cartRepository = cartRepository;
            _orderRepository = orderRepo; 
        }
        public async Task<OrderResponseDto> CheckoutAsync(CheckoutRequestDto request)
        {

            var currentUser =
                _userContext.GetCurrentUser();

            var cart =
                await _cartRepository.GetByUserIdAsync(
                    currentUser.UserId);

            if (cart == null || !cart.CartItems.Any())
            {
                throw new Exception("Cart is empty");
            }

            var address = await _context.Addresses
                                .FirstOrDefaultAsync(x =>
                                                        x.Id == request.AddressId &&
                                                        x.UserId == currentUser.UserId
                                                     );

            if (address == null)
            {
                throw new Exception("Invalid address");
            }

            var totalAmount = cart.CartItems.Sum(
                x => x.Cake.Price * x.Quantity);

            var order = new Order
            {
                UserId = currentUser.UserId,
                TotalAmount = totalAmount,
                OrderStatus = "Pending",
                PaymentStatus = "Pending",
                CreatedAt = DateTime.UtcNow
            };

            

            foreach (var item in cart.CartItems)
            {
                order.OrderItems.Add(
                    new OrderItem
                    {
                        CakeId = item.CakeId,
                        Quantity = item.Quantity,
                        UnitPrice = item.Cake.Price
                    });
            }

            await _orderRepository.AddOrderAsync(order);

            _context.CartItems.RemoveRange(
                cart.CartItems);

            await _context.SaveChangesAsync();

            return await GetOrderDetailsAsync(order.Id)
                   ?? throw new Exception();
        }

        public async Task<List<OrderResponseDto>> GetMyOrdersAsync()
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var orders =
                await _orderRepository
                    .GetOrdersByUserIdAsync(
                        currentUser.UserId);

            return orders.Select(MapOrder).ToList();
        }

        public async Task<OrderResponseDto?> GetOrderDetailsAsync(int orderId)
        {
            var order =
                await _orderRepository
                    .GetOrderByIdAsync(orderId);

            if (order == null)
                return null;

            return MapOrder(order);
        }

        public async Task UpdateOrderStatusAsync(UpdateOrderStatusDto request)
        {
            var order =
                await _orderRepository
                    .GetOrderByIdAsync(request.OrderId);

            if (order == null)
                throw new Exception("Order not found");

            order.OrderStatus = request.OrderStatus;

            await _orderRepository.SaveChangesAsync();
        }

        private OrderResponseDto MapOrder(Order order)
        {
            return new OrderResponseDto
            {
                OrderId = order.Id,
                TotalAmount = order.TotalAmount,
                OrderStatus = order.OrderStatus,
                PaymentStatus = order.PaymentStatus,
                CreatedAt = order.CreatedAt,

                Items = order.OrderItems
                    .Select(x => new OrderItemDto
                    {
                        CakeId = x.CakeId,
                        CakeName = x.Cake.Name,
                        Quantity = x.Quantity,
                        UnitPrice = x.UnitPrice,
                        TotalPrice =
                            x.UnitPrice * x.Quantity
                    })
                    .ToList()
            };
        }
    }
}
