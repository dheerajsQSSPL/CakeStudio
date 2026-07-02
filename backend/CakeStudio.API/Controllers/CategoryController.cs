using CakeStudio.Application.DTOs.Cake;
using CakeStudio.Application.DTOs.Category;
using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CakeStudio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            var categories = await _categoryService.GetAllAsync();
            return Ok(categories);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var category = await _categoryService.GetByIdAsync(id);

            if (category == null)
                return NotFound();

            return Ok(category);
        }


        [HttpGet]
        public async Task<IActionResult> GetCategories([FromQuery] CategoryFilterDto request)
        {
            var result = await _categoryService.GetCakesAsync(request);
            return Ok(result);
        }

        //[Authorize(Roles = "Admin")]
        [HttpPost("CreateCategory")]
        public async Task<IActionResult> Create([FromForm] CategoryRequestDto request)
        {
            var category = await _categoryService.CreateAsync(request);

            return CreatedAtAction( nameof(GetById), new { id = category.Id },category);
        }

        //[Authorize(Roles = "Admin")]
        [HttpPut]
        public async Task<IActionResult> Update([FromForm] CategoryRequestDto request)
        {
            var category = await _categoryService.UpdateAsync(request);

            return Ok(category);
        }

        //[Authorize(Roles = "Admin")]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _categoryService.DeleteAsync(id);

            return NoContent();
        }

        [HttpGet("getCategories")]
        public async Task<ActionResult<PagedResult<CategoryResponseDto>>> GetCategorieswithFilters([FromQuery] CategoryFilterDto request)
        {
            var result = await _categoryService.GetCakesAsync(request);

            return Ok(result);
        }
    }
}