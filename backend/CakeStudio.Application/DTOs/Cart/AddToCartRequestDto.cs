using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Cart
{
    public class AddToCartRequestDto
    {
        public int CakeId { get; set; }

        public int Quantity { get; set; }
    }
}
