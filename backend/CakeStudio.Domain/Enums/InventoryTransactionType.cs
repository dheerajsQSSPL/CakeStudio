using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Domain.Enums
{
    public enum InventoryTransactionType
    {
    StockAdded = 1,
    StockReduced = 2,
    Sale = 3,
    Return = 4,
    Damage = 5,
    Adjustment = 6
}
}
