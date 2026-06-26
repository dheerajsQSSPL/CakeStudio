using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Checkout;

namespace CakeStudio.API.Controllers
{
    [ApiController]
    [Route("api/webhooks/stripe")]
    public class StripeWebhookController : ControllerBase
    {
        private readonly IPaymentService _paymentService;
        private readonly IConfiguration _configuration;

        public StripeWebhookController(IPaymentService paymentService, IConfiguration configuration)
        {
            _paymentService = paymentService;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> Webhook()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

            Event stripeEvent;

            try
            {
                stripeEvent = EventUtility.ConstructEvent(json,Request.Headers["Stripe-Signature"],_configuration["StripeSettings:WebhookSecret"]);
            }
            catch
            {
                return BadRequest();
            }

            switch (stripeEvent.Type)
            {
                case EventTypes.CheckoutSessionCompleted:

                    var session = stripeEvent.Data.Object as Session;

                    await _paymentService.PaymentSuccessAsync(session!.Id);

                    break;

                case EventTypes.PaymentIntentPaymentFailed:

                    var paymentIntent = stripeEvent.Data.Object as PaymentIntent;

                    await _paymentService.PaymentFailedAsync( paymentIntent!.Id);

                    break;
            }

            return Ok();
        }
    }
}
