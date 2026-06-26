using CakeStudio.API.DbContexts.models;
using CakeStudio.Application.DTOs.Cart;
using CakeStudio.Application.Interfaces;
using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Services
{
    public class CartService : ICartService
    {
        private readonly ICartRepository _cartRepository;
        private readonly IUserContext _userContext;
        private readonly CakeStudioDbContext _context;

        public CartService(
            ICartRepository cartRepository,
            IUserContext userContext,
            CakeStudioDbContext context)
        {
            _cartRepository = cartRepository;
            _userContext = userContext;
            _context = context;
        }

        public async Task AddToCartAsync(
            AddToCartRequestDto request)
        {
            var user =
                _userContext.GetCurrentUser();

            var cart =
                await _cartRepository.GetByUserIdAsync(user.UserId);

            if (cart == null)
            {
                cart = await _cartRepository.CreateCartAsync(
                    new Cart
                    {
                        UserId = user.UserId
                    });
            }

            var existingItem =
                await _cartRepository.GetCartItemAsync(
                    cart.Id,
                    request.CakeId);

            if (existingItem != null)
            {
                existingItem.Quantity += request.Quantity;

                await _cartRepository.UpdateCartItemAsync(
                    existingItem);

                return;
            }

            await _cartRepository.AddCartItemAsync(
                new CartItem
                {
                    CartId = cart.Id,
                    CakeId = request.CakeId,
                    Quantity = request.Quantity
                });
        }

        public async Task UpdateQuantityAsync(
            UpdateCartItemRequestDto request)
        {
            var item =
                await _context.CartItems.FindAsync(
                    request.CartItemId);

            if (item == null)
                throw new Exception("Cart item not found");

            item.Quantity = request.Quantity;

            await _cartRepository.UpdateCartItemAsync(item);
        }

        public async Task RemoveItemAsync(int cartItemId)
        {
            var item =
                await _context.CartItems.FindAsync(cartItemId);

            if (item == null)
                throw new Exception("Cart item not found");

            await _cartRepository.RemoveCartItemAsync(item);
        }

        public async Task<CartResponseDto> GetMyCartAsync()
        {
            var user =
                _userContext.GetCurrentUser();

            var cart =
                await _cartRepository.GetByUserIdAsync(user.UserId);

            if (cart == null)
            {
                return new CartResponseDto();
            }

            var response = new CartResponseDto
            {
                CartId = cart.Id
            };

            foreach (var item in cart.CartItems)
            {
                response.Items.Add(
                    new CartItemResponseDto
                    {
                        CartItemId = item.Id,
                        CakeId = item.CakeId,
                        CakeName = item.Cake.Name,
                        UnitPrice = item.Cake.Price,
                        Quantity = item.Quantity,
                        TotalPrice =
                            item.Cake.Price * item.Quantity
                    });
            }

            response.GrandTotal =
                response.Items.Sum(x => x.TotalPrice);

            return response;
        }
    }
}
