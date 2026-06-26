using CakeStudio.Application.Interfaces;
using CakeStudio.Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace CakeStudio.Infrastructure.Services
{
    public class UserContext : IUserContext
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserContext(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public CurrentUser GetCurrentUser()
        {
            var user = _httpContextAccessor.HttpContext?.User;

            if (user == null || !user.Identity!.IsAuthenticated)
            {
                return new CurrentUser
                {
                    IsAuthenticated = false
                };
            }

            return new CurrentUser
            {
                UserId = int.Parse(
                    user.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0"),

                Email =
                    user.FindFirst(ClaimTypes.Email)?.Value ?? string.Empty,

                Role =
                    user.FindFirst(ClaimTypes.Role)?.Value ?? string.Empty,

                Name =
                    user.FindFirst(ClaimTypes.Name)?.Value ?? string.Empty,

                IsAuthenticated = true
            };
        }
    }
}
