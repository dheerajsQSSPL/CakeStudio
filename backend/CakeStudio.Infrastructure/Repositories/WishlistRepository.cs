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
    public class WishlistRepository : IWishlistRepository
    {
        private readonly CakeStudioDbContext _context;

        public WishlistRepository(
            CakeStudioDbContext context)
        {
            _context = context;
        }

        public async Task<Wishlist?> GetAsync(
            int userId,
            int cakeId)
        {
            return await _context.Wishlists
                .FirstOrDefaultAsync(x =>
                    x.UserId == userId &&
                    x.CakeId == cakeId);
        }

        public async Task<List<Wishlist>>
            GetByUserIdAsync(int userId)
        {
            return await _context.Wishlists
                .Include(x => x.Cake)
                .Where(x => x.UserId == userId)
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();
        }

        public async Task<Wishlist?> GetByIdAsync(
            int wishlistId)
        {
            return await _context.Wishlists
                .FirstOrDefaultAsync(x =>
                    x.Id == wishlistId);
        }

        public async Task AddAsync(
            Wishlist wishlist)
        {
            _context.Wishlists.Add(wishlist);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(
            Wishlist wishlist)
        {
            _context.Wishlists.Remove(wishlist);

            await _context.SaveChangesAsync();
        }
    }
}
