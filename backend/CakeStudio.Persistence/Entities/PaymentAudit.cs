using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CakeStudio.Persistence.Entities;

public partial class PaymentAudit
{
    [Key]
    public int Id { get; set; }

    public int OrderId { get; set; }

    [StringLength(200)]
    public string? StripeSessionId { get; set; }

    [StringLength(50)]
    public string Status { get; set; } = null!;

    [StringLength(500)]
    public string? Remarks { get; set; }

    public DateTime CreatedAt { get; set; }
}
