using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Wishlist
{
    public class WishlistResponseDto
    {
        public int WishlistId { get; set; }

        public int CakeId { get; set; }

        public string CakeName { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public string? ImageUrl { get; set; }

        public bool IsEggless { get; set; }
    }
}
