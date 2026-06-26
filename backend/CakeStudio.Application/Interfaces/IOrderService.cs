using CakeStudio.Application.DTOs.Order;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IOrderService
    {
        Task<OrderResponseDto> CheckoutAsync(CheckoutRequestDto request);

        Task<List<OrderResponseDto>> GetMyOrdersAsync();

        Task<OrderResponseDto?> GetOrderDetailsAsync(int orderId);

        Task UpdateOrderStatusAsync(UpdateOrderStatusDto request);
    }
}
