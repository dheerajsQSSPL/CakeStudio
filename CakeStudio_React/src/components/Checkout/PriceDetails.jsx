import {
    Box,
    Divider,
    Typography
} from "@mui/material";
import "./checkout.css"
const PriceDetails = ({ cartItems }) => {

    const subtotal = cartItems.reduce(

        (sum, item) =>

            sum + item.price * item.quantity

        , 0);

    const shipping = 0;

    const tax = 0;

    const total = subtotal + shipping + tax;

    return (

        <>

            <Box className="price-row">

                <Typography>Subtotal</Typography>

                <Typography>₹{subtotal}</Typography>

            </Box>

            <Box className="price-row">

                <Typography>Delivery</Typography>

                <Typography className="free">

                    FREE

                </Typography>

            </Box>

            <Box className="price-row">

                <Typography>GST</Typography>

                <Typography>₹0</Typography>

            </Box>

            <Divider className="summary-divider" />

            <Box className="price-row total">

                <Typography>

                    Total

                </Typography>

                <Typography>

                    ₹{total}

                </Typography>

            </Box>

        </>

    );

};

export default PriceDetails;