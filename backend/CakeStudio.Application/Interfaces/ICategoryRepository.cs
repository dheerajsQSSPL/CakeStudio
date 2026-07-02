using CakeStudio.Application.DTOs.Cake;
using CakeStudio.Application.DTOs.Category;
using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface ICategoryRepository
    {
        Task<Category> AddAsync(Category cake);

        Task<Category?> GetByIdAsync(int id);

        Task<List<Category>> GetAllAsync();

        Task UpdateAsync(Category cake);

        Task DeleteAsync(Category cake);
        Task<PagedResult<Category>> GetPagedCakesAsync(CategoryFilterDto request);
    }
}
