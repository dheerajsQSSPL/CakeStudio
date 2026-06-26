using CakeStudio.API.DbContexts.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CakeStudio.API.Controllers
{

        [Authorize(Roles = "Admin")]
        [ApiController]
        [Route("api/admin/audit")]
        public class AuditController : ControllerBase
        {
            private readonly CakeStudioDbContext _context;

            public AuditController(
                CakeStudioDbContext context)
            {
                _context = context;
            }

            [HttpGet]
            public async Task<IActionResult> Get()
            {
                return Ok(
                    await _context.AuditLogs
                        .OrderByDescending(x => x.CreatedAt)
                        .Take(100)
                        .ToListAsync());
            }
        }
    
}
