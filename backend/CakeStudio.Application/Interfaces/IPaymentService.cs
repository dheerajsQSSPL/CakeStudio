using CakeStudio.Application.DTOs.Payment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface IPaymentService
    {
        Task<PaymentSessionResponseDto>
            CreateSessionAsync(int orderId);

        Task PaymentSuccessAsync(string sessionId);

        Task PaymentFailedAsync(string sessionId);
    }
}
