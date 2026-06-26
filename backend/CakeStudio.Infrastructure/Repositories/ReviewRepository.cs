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
    public class ReviewRepository : IReviewRepository
    {
        private readonly CakeStudioDbContext _context;

        public ReviewRepository(
            CakeStudioDbContext context)
        {
            _context = context;
        }

        public async Task<Review?> GetByUserAndCakeAsync(
            int userId,
            int cakeId)
        {
            return await _context.Reviews
                .FirstOrDefaultAsync(x =>
                    x.UserId == userId &&
                    x.CakeId == cakeId);
        }

        public async Task AddAsync(Review review)
        {
            _context.Reviews.Add(review);

            await _context.SaveChangesAsync();
        }

        public async Task<Review?> GetByIdAsync(int reviewId)
        {
            return await _context.Reviews
                .Include(x => x.User)
                .FirstOrDefaultAsync(
                    x => x.Id == reviewId);
        }

        public async Task<List<Review>>
            GetByCakeIdAsync(int cakeId)
        {
            return await _context.Reviews
                .Include(x => x.User)
                .Where(x => x.CakeId == cakeId)
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();
        }

        public async Task DeleteAsync(Review review)
        {
            _context.Reviews.Remove(review);

            await _context.SaveChangesAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
