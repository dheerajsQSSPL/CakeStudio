using CakeStudio.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Security
{
    public class RefreshTokenService : IRefreshTokenService
    {
        public string GenerateRefreshToken()
        {
            return Guid.NewGuid().ToString();
        }
    }
}
