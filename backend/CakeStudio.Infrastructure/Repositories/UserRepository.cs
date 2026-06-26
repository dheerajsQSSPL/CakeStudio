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
    public class UserRepository : IUserRepository
    {
        private readonly CakeStudioDbContext _context;

        public UserRepository(
            CakeStudioDbContext context)
        {
            _context = context;
        }

        public async Task<User?> GetByEmailAsync(
            string email)
        {
            return await _context.Users
                .FirstOrDefaultAsync(x =>
                    x.Email == email);
        }

        public async Task<User?> GetByIdAsync(
            int userId)
        {
            return await _context.Users
                .FirstOrDefaultAsync(x =>
                    x.Id == userId);
        }

        public async Task AddUserAsync(
            User user)
        {
            await _context.Users.AddAsync(user);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
