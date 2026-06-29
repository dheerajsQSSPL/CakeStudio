import {
    Box,
    Card,
    CardContent,
    Divider,
    Typography
} from "@mui/material";
import "./checkout.css"
import PrimaryButton from "../../components/common/CustomFields/PrimaryButton/PrimaryButton";
import OrderItem from "./OrderItem";
import PriceDetails from "./PriceDetails";
import useCart from "../../hooks/useCart"
import { cakes } from "../Cakes/cakeData";

const OrderSummary = ({ paymentMethod, onCheckout }) => {

    const { cart } = useCart();

    const cartItems = cart
        .map(item => {

            const product = cakes.find(
                cake => cake.id === item.productId
            );

            return product
                ? {
                    ...product,
                    quantity: item.quantity
                }
                : null;

        })
        .filter(Boolean);

    return (

        <Card className="order-summary-card">

            <CardContent>

                <Typography className="summary-title">
                    Order Summary
                </Typography>

                <Box className="summary-items">

                    {cartItems.map(item => (

                        <OrderItem
                            key={item.id}
                            item={item}
                        />

                    ))}

                </Box>

                <Divider className="summary-divider" />

                <PriceDetails
                    cartItems={cartItems}
                />

                <PrimaryButton
                    fullWidth
                    className="checkout-btn"
                    onClick={onCheckout}
                >
                    {paymentMethod === "cod"
                        ? "Place Order"
                        : "Proceed to Payment"}
                </PrimaryButton>

            </CardContent>

        </Card>

    );

};

export default OrderSummary;