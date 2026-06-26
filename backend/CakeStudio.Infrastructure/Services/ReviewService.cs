using CakeStudio.API.DbContexts.models;
using CakeStudio.Application.Common.Exceptions;
using CakeStudio.Application.DTOs.Review;
using CakeStudio.Application.Interfaces;
using CakeStudio.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IUserContext _userContext;
        private readonly IReviewRepository _reviewRepository;
        private readonly CakeStudioDbContext _context;

        public ReviewService(IUserContext userContext, IReviewRepository reviewRepository, CakeStudioDbContext context)
        {
            _userContext = userContext;
            _reviewRepository = reviewRepository;
            _context = context;
        }

        public async Task CreateAsync(CreateReviewRequestDto request)
        {
            if (request.Rating < 1 ||
                request.Rating > 5)
            {
                throw new BadRequestException(
                    "Rating must be between 1 and 5");
            }

            var currentUser =
                _userContext.GetCurrentUser();

            var existingReview =
                await _reviewRepository
                    .GetByUserAndCakeAsync(
                        currentUser.UserId,
                        request.CakeId);

            if (existingReview != null)
            {
                throw new BadRequestException(
                    "Review already submitted");
            }

            var hasPurchased =
                await _context.OrderItems
                    .AnyAsync(x =>
                        x.Order.UserId ==
                            currentUser.UserId &&
                        x.CakeId ==
                            request.CakeId &&
                        x.Order.OrderStatus ==
                            "Delivered");

            if (!hasPurchased)
            {
                throw new BadRequestException(
                    "Purchase required before review");
            }

            await _reviewRepository.AddAsync(
                new Review
                {
                    UserId = currentUser.UserId,
                    CakeId = request.CakeId,
                    Rating = request.Rating,
                    Comment = request.Comment,
                    CreatedAt = DateTime.UtcNow
                });
        }

        public async Task DeleteAsync(int reviewId)
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var review =
                await _reviewRepository
                    .GetByIdAsync(reviewId);

            if (review == null)
                throw new NotFoundException("Review not found");

            if (review.UserId != currentUser.UserId)
                throw new NotFoundException("Access denied");

            await _reviewRepository.DeleteAsync(
                review);
        }

        public async Task<List<ReviewResponseDto>> GetCakeReviewsAsync(int cakeId)
        {
            var reviews =
                await _reviewRepository
                    .GetByCakeIdAsync(cakeId);

            return reviews.Select(x =>
                new ReviewResponseDto
                {
                    ReviewId = x.Id,
                    CustomerName =
                        x.User.FirstName,
                    Rating = x.Rating,
                    Comment = x.Comment,
                    CreatedAt = x.CreatedAt
                }).ToList();
        }

        public async Task UpdateAsync(UpdateReviewRequestDto request)
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var review =
                await _reviewRepository
                    .GetByIdAsync(request.ReviewId);

            if (review == null)
                throw new NotFoundException("Review not found");

            if (review.UserId != currentUser.UserId)
                throw new UnauthorizedException("Access denied");

            review.Rating = request.Rating;
            review.Comment = request.Comment;
            review.UpdatedAt = DateTime.UtcNow;

            await _reviewRepository.SaveChangesAsync();
        }
    }
}
