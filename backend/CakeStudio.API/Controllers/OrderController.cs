using CakeStudio.Application.DTOs.Order;
using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CakeStudio.API.Controllers
{
    [Authorize(Roles = "Customer")]
    [ApiController]
    [Route("api/orders")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost("checkout")]
        public async Task<IActionResult> Checkout(
            CheckoutRequestDto request)
        {
            return Ok(
                await _orderService.CheckoutAsync(
                    request));
        }

        [HttpGet]
        public async Task<IActionResult> MyOrders()
        {
            return Ok(
                await _orderService.GetMyOrdersAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Details(int id)
        {
            return Ok(
                await _orderService
                    .GetOrderDetailsAsync(id));
        }
    }
}
