using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IOrderRepository
    {
        Task<Order> AddOrderAsync(Order order);

        Task<List<Order>> GetOrdersByUserIdAsync(int userId);

        Task<Order?> GetOrderByIdAsync(int orderId);

        Task<List<Order>> GetAllOrdersAsync();

        Task SaveChangesAsync();
    }
}
