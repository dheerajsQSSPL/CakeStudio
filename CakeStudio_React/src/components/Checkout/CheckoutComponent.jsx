import { Box, Grid } from "@mui/material";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb"

// import ShippingForm from "../common/Checkout/ShippingForm";
// import PaymentMethods from "../common/Checkout/PaymentMethods";
// import OrderSummary from "../common/Checkout/OrderSummary";

import "./checkout.css";
import { useState } from "react";
import ShippingForm from "./ShippingForm";
import PaymentMethods from "./PaymentMethods";
import OrderSummary from "./OrderSummary";

export default function CheckoutComponent() {
    const [shipping, setShipping] = useState({
        fullName: "",
        mobile: "",
        email: "",
        address: "",
        landmark: "",
        city: "",
        state: "",
        pincode: "",
        saveAddress: true
    });
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const handleCheckout = () => {

        console.log("Shipping");

        console.log(shipping);

        console.log("Payment Method");

        console.log(paymentMethod);

        switch (paymentMethod) {

            case "cod":

                console.log("Place COD Order");

                break;

            case "card":

                console.log("Redirect to Stripe Checkout");

                break;

            case "upi":

                console.log("Proceed with UPI");

                break;

            default:

                break;

        }

    };

    return (

        <Box className="checkout-page">

            <Breadcrumb
                items={[
                    {
                        label: "Home",
                        path: "/"
                    },
                    {
                        label: "Cart",
                        path: "/cart"
                    },
                    {
                        label: "Checkout"
                    }
                ]}
            />

            <Grid
                container
                spacing={4}
            >

                {/* Left */}

                <Grid
                    size={{
                        xs: 12,
                        md: 7
                    }}
                >

                    <ShippingForm
                        shipping={shipping}
                        setShipping={setShipping}
                    />

                    <PaymentMethods
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                    />

                </Grid>

                {/* Right */}

                <Grid
                    size={{
                        xs: 12,
                        md: 5
                    }}
                >

                   <OrderSummary
                        paymentMethod={paymentMethod}
                        onCheckout={handleCheckout}
                    />

                </Grid>

            </Grid>

        </Box>

    );

}