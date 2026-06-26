using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Inventory
{
    public class InventoryHistoryDto
    {
        public int TransactionId { get; set; }

        public string TransactionType { get; set; } = string.Empty;

        public int Quantity { get; set; }

        public string? Remarks { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
