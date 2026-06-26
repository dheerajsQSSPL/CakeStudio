using CakeStudio.Application.DTOs.Address;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IAddressService
    {
        Task CreateAsync(CreateAddressRequestDto request);

        Task UpdateAsync(UpdateAddressRequestDto request);

        Task DeleteAsync(int addressId);

        Task SetDefaultAsync(int addressId);

        Task<List<AddressResponseDto>> GetMyAddressesAsync();
    }
}
