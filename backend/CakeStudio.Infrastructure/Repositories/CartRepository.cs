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
    public class CartRepository : ICartRepository
    {
        private readonly CakeStudioDbContext _context;

        public CartRepository(CakeStudioDbContext context)
        {
            _context = context;
        }

        public async Task<Cart?> GetByUserIdAsync(int userId)
        {
            return await _context.Carts
                .Include(x => x.CartItems)
                .ThenInclude(x => x.Cake)
                .FirstOrDefaultAsync(x => x.UserId == userId);
        }

        public async Task<Cart> CreateCartAsync(Cart cart)
        {
            _context.Carts.Add(cart);

            await _context.SaveChangesAsync();

            return cart;
        }

        public async Task<CartItem?> GetCartItemAsync(
            int cartId,
            int cakeId)
        {
            return await _context.CartItems
                .FirstOrDefaultAsync(x =>
                    x.CartId == cartId &&
                    x.CakeId == cakeId);
        }

        public async Task AddCartItemAsync(CartItem item)
        {
            _context.CartItems.Add(item);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateCartItemAsync(CartItem item)
        {
            _context.CartItems.Update(item);

            await _context.SaveChangesAsync();
        }

        public async Task RemoveCartItemAsync(CartItem item)
        {
            _context.CartItems.Remove(item);

            await _context.SaveChangesAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
