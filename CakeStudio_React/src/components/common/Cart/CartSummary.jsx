import {
    Box,
    Divider,
    Typography
} from "@mui/material";

import PrimaryButton from "../CustomFields/PrimaryButton/PrimaryButton";
import "../../Cart/cart.css"
import { useNavigate } from "react-router-dom";
const CartSummary = ({

    subtotal,

    shipping = 0,

    tax = 0

}) => {
      const navigate = useNavigate()
    const total = subtotal + shipping + tax;

    return (

        <Box className="cart-summary">

            <Typography className="summary-title">

                Order Summary

            </Typography>

            <Box className="summary-row">

                <Typography>

                    Subtotal

                </Typography>

                <Typography>

                    ₹{subtotal}

                </Typography>

            </Box>

            <Box className="summary-row">

                <Typography>

                    Shipping

                </Typography>

                <Typography>

                    {shipping === 0
                        ? "Free"
                        : `₹${shipping}`}

                </Typography>

            </Box>

            <Box className="summary-row">

                <Typography>

                    Tax

                </Typography>

                <Typography>

                    ₹{tax}

                </Typography>

            </Box>

            <Divider sx={{ my: 2 }} />

            <Box className="summary-row total-row">

                <Typography>

                    Total

                </Typography>

                <Typography>

                    ₹{total}

                </Typography>

            </Box>

            <PrimaryButton
                fullWidth
                sx={{ mt: 3 }}
                onClick={()=> navigate('/checkout')}
            >

                Proceed to Checkout

            </PrimaryButton>

        </Box>

    );

};

export default CartSummary;