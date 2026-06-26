using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CakeStudio.Persistence.Entities;

public partial class AuditLog
{
    [Key]
    public long Id { get; set; }

    public int UserId { get; set; }

    [StringLength(100)]
    public string UserName { get; set; } = null!;

    [StringLength(50)]
    public string Action { get; set; } = null!;

    [StringLength(100)]
    public string EntityName { get; set; } = null!;

    [StringLength(100)]
    public string EntityId { get; set; } = null!;

    public string? OldValues { get; set; }

    public string? NewValues { get; set; }

    public DateTime CreatedAt { get; set; }
}
