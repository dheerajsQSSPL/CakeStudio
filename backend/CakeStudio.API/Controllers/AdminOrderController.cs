using CakeStudio.Application.DTOs.Order;
using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CakeStudio.API.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/admin/orders")]
    public class AdminOrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public AdminOrderController(
            IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPut("status")]
        public async Task<IActionResult> UpdateStatus(
            UpdateOrderStatusDto request)
        {
            await _orderService
                .UpdateOrderStatusAsync(request);

            return Ok();
        }
    }
}
