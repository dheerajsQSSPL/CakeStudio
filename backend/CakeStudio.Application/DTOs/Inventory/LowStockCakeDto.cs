using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Inventory
{
    public class LowStockCakeDto
    {
        public int CakeId { get; set; }
        public string CakeName { get; set; } = string.Empty;
        public int StockQuantity { get; set; }
    }
}
