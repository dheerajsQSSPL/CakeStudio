using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CakeStudio.Persistence.Entities;

[Index("UserId", "CakeId", Name = "IX_Wishlist_User_Cake", IsUnique = true)]
public partial class Wishlist
{
    [Key]
    public int Id { get; set; }

    public int UserId { get; set; }

    public int CakeId { get; set; }

    public DateTime CreatedAt { get; set; }

    [ForeignKey("CakeId")]
    public virtual Cake Cake { get; set; } = null!;

    [ForeignKey("UserId")]
    public virtual User User { get; set; } = null!;
}
