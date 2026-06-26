using CakeStudio.Application.Common.Exceptions;
using CakeStudio.Application.DTOs.Cake;
using CakeStudio.Application.Interfaces;
using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Services
{
    public class CakeService : ICakeService
    {
        private readonly ICakeRepository _cakeRepository;
        private readonly IAuditService _auditService;
        private readonly IUserContext _userContext;

        public CakeService(ICakeRepository cakeRepository, IAuditService auditService, IUserContext userContext)
        {
            _cakeRepository = cakeRepository;
            _auditService = auditService;
            _userContext = userContext;
        }

        public async Task<CakeResponseDto> CreateAsync(
            CreateCakeRequestDto request)
        {
            var cake = new Cake
            {
                CategoryId = request.CategoryId,
                Name = request.Name,
                Description = request.Description,
                Price = request.Price,
                StockQuantity = request.StockQuantity,
                ImageUrl = request.ImageUrl,
                IsEggless = request.IsEggless,
                IsAvailable = true
            };

            await _cakeRepository.AddAsync(cake);

            await _auditService.LogAsync("Create","Cake",cake.Id.ToString(),null,new
            {
                cake.Name,
                cake.Price,
                cake.StockQuantity
            });

            return new CakeResponseDto
            {
                Id = cake.Id,
                Name = cake.Name,
                Price = cake.Price,
                StockQuantity = cake.StockQuantity,
                ImageUrl = cake.ImageUrl,
                IsAvailable = cake.IsAvailable
            };
        }

        public async Task<List<CakeResponseDto>> GetAllAsync()
        {
            var cakes = await _cakeRepository.GetAllAsync();

            return cakes.Select(x => new CakeResponseDto
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price,
                StockQuantity = x.StockQuantity,
                ImageUrl = x.ImageUrl,
                IsAvailable = x.IsAvailable
            }).ToList();
        }

        public async Task<CakeResponseDto?> GetByIdAsync(int id)
        {
            var cake = await _cakeRepository.GetByIdAsync(id);

            if (cake == null)
                return null;

            return new CakeResponseDto
            {
                Id = cake.Id,
                Name = cake.Name,
                Price = cake.Price,
                StockQuantity = cake.StockQuantity,
                ImageUrl = cake.ImageUrl,
                IsAvailable = cake.IsAvailable
            };
        }

        public async Task<CakeResponseDto> UpdateAsync(
            UpdateCakeRequestDto request)
        {
            var cake = await _cakeRepository.GetByIdAsync(request.Id);


            if (cake == null)
                throw new NotFoundException("Cake not found");

            var oldData = new
            {
                cake.Name,
                cake.Price,
                cake.StockQuantity
            };

            cake.Name = request.Name;
            cake.Description = request.Description;
            cake.Price = request.Price;
            cake.StockQuantity = request.StockQuantity;
            cake.ImageUrl = request.ImageUrl;
            cake.IsEggless = request.IsEggless;
            cake.IsAvailable = request.IsAvailable;

            var newData = new
            {
                cake.Name,
                cake.Price,
                cake.StockQuantity
            };

            await _auditService.LogAsync("Update","Cake",cake.Id.ToString(),oldData,newData);

            await _cakeRepository.UpdateAsync(cake);

            return new CakeResponseDto
            {
                Id = cake.Id,
                Name = cake.Name,
                Price = cake.Price,
                StockQuantity = cake.StockQuantity,
                ImageUrl = cake.ImageUrl,
                IsAvailable = cake.IsAvailable
            };
        }

        public async Task DeleteAsync(int id)
        {
            var cake = await _cakeRepository.GetByIdAsync(id);

            if (cake == null)
                throw new NotFoundException("Cake not found");

            cake.IsDeleted = true;
            cake.DeletedAt = DateTime.UtcNow;
            cake.DeletedBy = _userContext.GetCurrentUser().UserId;

            await _cakeRepository.DeleteAsync(cake);
        }

        public async Task<PagedResult<CakeListResponseDto>> GetCakesAsync(CakeFilterRequestDto request)
        {
            var result =
                await _cakeRepository
                    .GetPagedCakesAsync(
                        request);

            return new PagedResult<
                CakeListResponseDto>
            {
                Page = result.Page,

                PageSize = result.PageSize,

                TotalRecords =
                    result.TotalRecords,

                TotalPages =
                    result.TotalPages,

                Data =
                    result.Data.Select(x =>
                        new CakeListResponseDto
                        {
                            CakeId = x.Id,
                            Name = x.Name,
                            Price = x.Price,
                            Category = x.Category.Name,
                            ImageUrl = x.ImageUrl,
                            StockQuantity =
                                x.StockQuantity
                        })
                    .ToList()
            };
        }
    }
}
