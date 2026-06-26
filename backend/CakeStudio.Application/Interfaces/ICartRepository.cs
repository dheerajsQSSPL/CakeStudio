using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface ICartRepository
    {
        Task<Cart?> GetByUserIdAsync(int userId);

        Task<Cart> CreateCartAsync(Cart cart);

        Task<CartItem?> GetCartItemAsync(int cartId,int cakeId);

        Task AddCartItemAsync(CartItem item);

        Task UpdateCartItemAsync(CartItem item);

        Task RemoveCartItemAsync(CartItem item);

        Task SaveChangesAsync();
    }
}
