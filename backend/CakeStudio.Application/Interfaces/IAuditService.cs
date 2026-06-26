using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IAuditService
    {
        Task LogAsync(string action,string entityName,string entityId,object? oldValues,object? newValues);
    }
}
