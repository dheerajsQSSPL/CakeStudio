using CakeStudio.Application.DTOs.Inventory;
using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CakeStudio.API.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/admin/inventory")]
    public class InventoryController : ControllerBase
    {
        private readonly IInventoryService _service;

        public InventoryController(IInventoryService service)
        {
            _service = service;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddStock(AddStockRequestDto request)
        {
            await _service.AddStockAsync(request);

            return Ok("Stock Added");
        }

        [HttpPost("reduce")]
        public async Task<IActionResult> ReduceStock(ReduceStockRequestDto request)
        {
            await _service.ReduceStockAsync(request);

            return Ok("Stock Reduced");
        }

        [HttpGet("history/{cakeId}")]
        public async Task<IActionResult> GetHistory(
            int cakeId)
        {
            return Ok(await _service.GetHistoryAsync(cakeId));
        }

        [HttpGet("low-stock")]
        public async Task<IActionResult> GetLowStock()
        {
            return Ok(await _service.GetLowStockCakesAsync());
        }
    }
}
