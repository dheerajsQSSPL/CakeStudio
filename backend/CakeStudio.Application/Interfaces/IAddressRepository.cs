using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IAddressRepository
    {
        Task<List<Address>> GetByUserIdAsync(int userId);

        Task<Address?> GetByIdAsync(int addressId);

        Task AddAsync(Address address);

        Task DeleteAsync(Address address);

        Task SaveChangesAsync();
    }
}
