using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CakeStudio.Persistence.Entities
{

    [Index("UserId", Name = "UQ__Carts__1788CC4DF660288F", IsUnique = true)]
    public partial class Cart
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }

        public DateTime CreatedAt { get; set; }

        public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

        [ForeignKey("UserId")]
        public virtual User User { get; set; } = null!;
    }
}
