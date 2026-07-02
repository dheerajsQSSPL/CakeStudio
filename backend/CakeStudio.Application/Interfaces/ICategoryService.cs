using CakeStudio.Application.DTOs.Cake;
using CakeStudio.Application.DTOs.Category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface ICategoryService
    {
        Task<CategoryResponseDto> CreateAsync(CategoryRequestDto request);

        Task<CategoryResponseDto> UpdateAsync(CategoryRequestDto request);

        Task DeleteAsync(int id);

        Task<List<CategoryResponseDto>> GetAllAsync();

        Task<CategoryResponseDto?> GetByIdAsync(int id);
        Task<PagedResult<CategoryResponseDto>> GetCakesAsync(CategoryFilterDto request);
    }
}
