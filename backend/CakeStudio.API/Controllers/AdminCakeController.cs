using CakeStudio.Application.DTOs.Cake;
using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CakeStudio.API.Controllers
{
    [ApiController]
    [Route("api/admin/cakes")]
    [Authorize(Roles = "Admin")]
    public class AdminCakeController : ControllerBase
    {
        private readonly ICakeService _cakeService;

        public AdminCakeController(ICakeService cakeService)
        {
            _cakeService = cakeService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(
            CreateCakeRequestDto request)
        {
            var result =
                await _cakeService.CreateAsync(request);

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Update(
            UpdateCakeRequestDto request)
        {
            var result =
                await _cakeService.UpdateAsync(request);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _cakeService.DeleteAsync(id);

            return NoContent();
        }
    }
}
