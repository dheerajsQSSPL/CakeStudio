using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Payment
{
    public class PaymentSessionResponseDto
    {
        public string SessionId { get; set; } = string.Empty;

        public string CheckoutUrl { get; set; } = string.Empty;
    }
}
