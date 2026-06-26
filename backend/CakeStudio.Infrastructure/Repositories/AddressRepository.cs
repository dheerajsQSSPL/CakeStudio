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
    public class AddressRepository : IAddressRepository
    {
        private readonly CakeStudioDbContext _context;

        public AddressRepository(CakeStudioDbContext context)
        {
            _context = context;
        }

        public async Task<List<Address>> GetByUserIdAsync(int userId)
        {
            return await _context.Addresses
                .Where(x => x.UserId == userId)
                .OrderByDescending(x => x.IsDefault)
                .ToListAsync();
        }

        public async Task<Address?> GetByIdAsync(int addressId)
        {
            return await _context.Addresses
                .FirstOrDefaultAsync(x => x.Id == addressId);
        }

        public async Task AddAsync(Address address)
        {
            _context.Addresses.Add(address);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Address address)
        {
            _context.Addresses.Remove(address);

            await _context.SaveChangesAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

    }
}
