using CakeStudio.Application.DTOs.Inventory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IInventoryService
    {
        Task AddStockAsync(AddStockRequestDto request);
        Task ReduceStockAsync(ReduceStockRequestDto request);
        Task<List<InventoryHistoryDto>> GetHistoryAsync(int cakeId);
        Task<List<LowStockCakeDto>> GetLowStockCakesAsync();
    }
}
