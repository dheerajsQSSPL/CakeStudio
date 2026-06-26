using CakeStudio.API.DbContexts.models;
using CakeStudio.Application.Interfaces;
using CakeStudio.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace CakeStudio.Application.Services
{

    public class AuditService : IAuditService
    {
        private readonly CakeStudioDbContext _context;
        private readonly IUserContext _userContext;

        public AuditService(
            CakeStudioDbContext context,
            IUserContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        public async Task LogAsync(
            string action,
            string entityName,
            string entityId,
            object? oldValues,
            object? newValues)
        {
            var currentUser =
                _userContext.GetCurrentUser();

            var audit = new AuditLog
            {
                UserId = currentUser.UserId,

                UserName = currentUser.Name,

                Action = action,

                EntityName = entityName,

                EntityId = entityId,

                OldValues =
                    oldValues == null
                    ? null
                    : JsonSerializer.Serialize(oldValues),

                NewValues =
                    newValues == null
                    ? null
                    : JsonSerializer.Serialize(newValues),

                CreatedAt = DateTime.UtcNow
            };

            _context.AuditLogs.Add(audit);

            await _context.SaveChangesAsync();
        }
    }
}
