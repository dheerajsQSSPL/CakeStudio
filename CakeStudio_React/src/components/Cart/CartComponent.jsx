import { Box, Grid } from "@mui/material";



import { cakes } from "../Cakes/cakeData";

import "./cart.css";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import CartTable from "../common/Cart/CartTable";
import CartSummary from "../common/Cart/CartSummary";
import { useMemo, useState } from "react";
import useCart from "../../hooks/useCart";



export default function CartComponent() {

    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeItem
    } = useCart();

    const cartItems = useMemo(() => {

        return cart
            .map(item => {

                const product = cakes.find(
                    cake => cake.id === item.productId
                );

                if (!product) return null;

                return {
                    ...product,
                    quantity: item.quantity
                };

            })
            .filter(Boolean);

    }, [cart]);

    const subtotal = useMemo(() => {

        return cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

    }, [cartItems]);


    return (

        <Box className="cart-page">

            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Cart" }
                ]}
            />

            <h1 className="cart-title">
                My Cart
            </h1>

            <Grid container spacing={4}>

                <Grid size={{ xs: 12, lg: 9 }}>

                    <CartTable
                        cartItems={cartItems}
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                        onRemove={removeItem}
                    />

                </Grid>

                <Grid size={{ xs: 12, lg: 3 }}>

                    <CartSummary
                        subtotal={subtotal}
                    />

                </Grid>

            </Grid>

        </Box>

    );

}