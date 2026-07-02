using CakeStudio.Application.DTOs.Cake;
using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace CakeStudio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CakeController : ControllerBase
    {
        private readonly ICakeService _cakeService;

        public CakeController(ICakeService cakeService)
        {
            _cakeService = cakeService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            var cakes = await _cakeService.GetAllAsync();

            return Ok(cakes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var cake = await _cakeService.GetByIdAsync(id);

            if (cake == null)
                return NotFound();

            return Ok(cake);
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetCakes([FromQuery] CakeFilterRequestDto request)
        {
            return Ok(await _cakeService.GetCakesAsync(request));
        }
    }
}
