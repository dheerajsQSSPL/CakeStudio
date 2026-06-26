using CakeStudio.Application.Common.Exceptions;
using CakeStudio.Application.DTOs.Inventory;
using CakeStudio.Application.Interfaces;
using CakeStudio.Domain.Enums;
using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Services
{
    public class InventoryService : IInventoryService
    {
        private readonly IUserContext _userContext;
        private readonly IInventoryRepository _repository;
        public InventoryService(IUserContext userContext, IInventoryRepository inventoryService) 
        { 
            _userContext = userContext;
            _repository = inventoryService;
        }
        public async Task AddStockAsync(AddStockRequestDto request)
        {
            var cake = await _repository.GetCakeAsync(request.CakeId);

            if (cake == null)
            {
                throw new NotFoundException("Cake not found");
            }

            cake.StockQuantity += request.Quantity;

            await _repository.AddTransactionAsync(
                new InventoryTransaction
                {
                    CakeId = cake.Id,
                    Quantity = request.Quantity,
                    TransactionType = "StockAdded",//(int)InventoryTransactionType.StockAdded //in future change table column to int
                                                   //When displaying:
                                                   //TransactionType =Enum.GetName(typeof(InventoryTransactionType),x.TransactionType);
                                                   //or
                                                   //((InventoryTransactionType)x.TransactionType).ToString()
                    Remarks = request.Remarks,
                    CreatedBy = _userContext.GetCurrentUser().UserId
                });

            await _repository.SaveChangesAsync();
        }
        public async Task<List<InventoryHistoryDto>> GetHistoryAsync(int cakeId)
        {
            var transactions = await _repository.GetHistoryAsync(cakeId);

            return transactions.Select(x =>
                new InventoryHistoryDto
                {
                    TransactionId = x.Id,
                    TransactionType = x.TransactionType,
                    Quantity = x.Quantity,
                    Remarks = x.Remarks,
                    CreatedAt = x.CreatedAt
                }).ToList();
        }
        public async Task ReduceStockAsync(ReduceStockRequestDto request)
        {
            var cake = await _repository.GetCakeAsync(request.CakeId);

            if (cake == null)
            {
                throw new NotFoundException("Cake not found");
            }

            if (cake.StockQuantity < request.Quantity)
            {
                throw new BadRequestException("Insufficient stock");
            }

            cake.StockQuantity -= request.Quantity;

            await _repository.AddTransactionAsync(
                new InventoryTransaction
                {
                    CakeId = cake.Id,
                    Quantity = -request.Quantity,
                    TransactionType = "StockReduced",
                    Remarks = request.Remarks,
                    CreatedBy =
                        _userContext
                            .GetCurrentUser()
                            .UserId
                });

            await _repository.SaveChangesAsync();
        }
        public async Task<List<LowStockCakeDto>> GetLowStockCakesAsync()
        {
            var cakes = await _repository.GetLowStockCakesAsync(10);

            return cakes.Select(x =>
                new LowStockCakeDto
                {
                    CakeId = x.Id,
                    CakeName = x.Name,
                    StockQuantity = x.StockQuantity
                }).ToList();
        }
    }
}
