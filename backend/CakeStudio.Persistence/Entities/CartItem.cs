using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CakeStudio.Persistence.Entities
{

    public partial class CartItem
    {
        [Key]
        public int Id { get; set; }

        public int CartId { get; set; }

        public int CakeId { get; set; }

        public int Quantity { get; set; }

        [ForeignKey("CakeId")]
        public virtual Cake Cake { get; set; } = null!;

        [ForeignKey("CartId")]
        public virtual Cart Cart { get; set; } = null!;
    }
}
