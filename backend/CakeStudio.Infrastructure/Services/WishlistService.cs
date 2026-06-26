using CakeStudio.Application.DTOs.Cart;
using CakeStudio.Application.DTOs.Wishlist;
using CakeStudio.Application.Interfaces;
using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Services
{
    public class WishlistService : IWishlistService
    {
        private readonly IUserContext _userContext;
        private readonly IWishlistRepository _wishlistRepository;
        private readonly ICartService _cartService;

        public WishlistService(IUserContext userContext, IWishlistRepository wishlistRepository, ICartService cartService)
        {
            _userContext = userContext;
            _wishlistRepository = wishlistRepository;
            _cartService = cartService;
        }

        public async Task AddAsync(AddWishlistRequestDto request)
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var existing =
                await _wishlistRepository.GetAsync(
                    currentUser.UserId,
                    request.CakeId);

            if (existing != null)
            {
                throw new Exception(
                    "Cake already exists in wishlist");
            }

            await _wishlistRepository.AddAsync(
                new Wishlist
                {
                    UserId = currentUser.UserId,
                    CakeId = request.CakeId,
                    CreatedAt = DateTime.UtcNow
                });
        }

        public async Task<List<WishlistResponseDto>> GetMyWishlistAsync()
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var items =
                await _wishlistRepository
                    .GetByUserIdAsync(
                        currentUser.UserId);

            return items.Select(x =>
                new WishlistResponseDto
                {
                    WishlistId = x.Id,
                    CakeId = x.CakeId,
                    CakeName = x.Cake.Name,
                    Price = x.Cake.Price,
                    ImageUrl = x.Cake.ImageUrl,
                    IsEggless = x.Cake.IsEggless
                })
                .ToList();
        }

        public async Task MoveToCartAsync(int wishlistId)
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var wishlist =
                await _wishlistRepository
                    .GetByIdAsync(wishlistId);

            if (wishlist == null)
                throw new Exception(
                    "Wishlist item not found");

            if (wishlist.UserId != currentUser.UserId)
                throw new Exception(
                    "Access denied");

            await _cartService.AddToCartAsync(
                new AddToCartRequestDto
                {
                    CakeId = wishlist.CakeId,
                    Quantity = 1
                });

            await _wishlistRepository
                .DeleteAsync(wishlist);
        }

        public async Task RemoveAsync(int wishlistId)
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var wishlist =
                await _wishlistRepository
                    .GetByIdAsync(wishlistId);

            if (wishlist == null)
                throw new Exception(
                    "Wishlist item not found");

            if (wishlist.UserId != currentUser.UserId)
                throw new Exception(
                    "Access denied");

            await _wishlistRepository
                .DeleteAsync(wishlist);
        }
    }
}
