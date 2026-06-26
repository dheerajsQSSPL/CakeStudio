using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IInventoryRepository
    {
        Task<Cake?> GetCakeAsync(int cakeId);
        Task AddTransactionAsync(InventoryTransaction transaction);
        Task<List<InventoryTransaction>> GetHistoryAsync(int cakeId);
        Task SaveChangesAsync();
        Task<List<Cake>> GetLowStockCakesAsync(int threshold);
    }
}
