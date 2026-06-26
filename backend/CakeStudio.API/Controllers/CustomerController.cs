using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CakeStudio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly IUserContext _userContext;
        public CustomerController(IUserContext userContext)
        {
            _userContext = userContext;
        }
        [HttpGet("public")]
        public IActionResult PublicData()
        {
            return Ok("Anyone can access");
        }

        [HttpGet("profile")]
        public IActionResult Profile()
        {
            var currentUser =
                _userContext.GetCurrentUser();

            return Ok(currentUser);
        }

        [Authorize(Roles = "Customer")]
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            return Ok("Customer Dashboard");
        }
    }
}
