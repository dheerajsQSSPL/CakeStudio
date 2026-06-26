using CakeStudio.API.DbContexts.models;
using CakeStudio.Application.Interfaces;
using CakeStudio.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Repositories
{
    public class InventoryRepository : IInventoryRepository
    {
        private readonly CakeStudioDbContext _context;

        public InventoryRepository(CakeStudioDbContext context)
        {
            _context = context;
        }

        public async Task<Cake?> GetCakeAsync(int cakeId)
        {
            return await _context.Cakes.FirstOrDefaultAsync(x => x.Id == cakeId);
        }

        public async Task AddTransactionAsync(InventoryTransaction transaction)
        {
            await _context.InventoryTransactions.AddAsync(transaction);
        }

        public async Task<List<InventoryTransaction>> GetHistoryAsync(int cakeId)
        {
            return await _context.InventoryTransactions.Where(x => x.CakeId == cakeId).OrderByDescending(x => x.CreatedAt).ToListAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<List<Cake>> GetLowStockCakesAsync(int threshold)
        {
            return await _context.Cakes.Where(x => x.StockQuantity <= threshold).OrderBy(x => x.StockQuantity).ToListAsync();
        }
    }
}
