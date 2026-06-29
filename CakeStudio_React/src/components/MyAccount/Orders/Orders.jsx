import {
    Box,
    Typography
} from "@mui/material";

import Breadcrumb from "../../common/Breadcrumb/Breadcrumb";
import OrdersList from "./OrdersList";

import "./Orders.css";

export default function Orders() {

    const orders = [

        {
            id: "ORD-1001",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",
            cakeName: "Chocolate Truffle",
            quantity: 2,
            amount: 1798,
            orderDate: "29 Jun 2026",
            deliveryDate: "30 Jun 2026",
            paymentMethod: "Credit Card",
            status: "Delivered"
        },
        {
            id: "ORD-1002",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",
            cakeName: "Red Velvet",
            quantity: 1,
            amount: 899,
            orderDate: "01 Jul 2026",
            deliveryDate: "02 Jul 2026",
            paymentMethod: "Cash On Delivery",
            status: "Processing"
        }

    ];

    return (

        // <Box className="orders-page">

            <OrdersList
                orders={orders}
            />

        // </Box>

    );

}