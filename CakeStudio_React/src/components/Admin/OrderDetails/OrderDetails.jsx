import {
    Box,
    Grid
} from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderHeader from "./OrderHeader";
import OrderSummaryCard from "./OrderSummaryCard";
import PaymentInformationCard from "./PaymentInformationCard";
import CustomerInformationCard from "./CustomerInformationCard";
import ShippingAddressCard from "./ShippingAddressCard";
import OrderedItemsTable from "./OrderedItemsTable";
import OrderTimeline from "./OrderTimeline";
import UpdateOrderStatus from "./UpdateOrderStatus";

import "./OrderDetails.css";
import OrderNotesCard from "./OrderNotesCard";

export default function OrderDetails(props) {

    const orderId = props.id

    const [order, setOrder] = useState(null);

    useEffect(() => {

        // Replace with API call later

        setOrder({

            orderId: props.id,

            orderDate: "30 Jun 2026",

            estimatedDelivery: "02 Jul 2026",

            totalAmount: 2198,

            paymentMethod: "Credit Card",

            paymentStatus: "Paid",

            transactionId: "txn_93JD83KDK",

            paymentDate: "30 Jun 2026",

            customerName: "Rahul Sharma",

            email: "rahul@gmail.com",

            mobile: "9876543210",

            address: "123 Sweet Street",

            landmark: "Near City Mall",

            city: "Bangalore",

            state: "Karnataka",

            pincode: "560001",

            orderStatus: "Delivered",

            items: [

                {
                    id: 1,
                    name: "Chocolate Truffle Cake",
                    quantity: 1,
                    price: 899,
                    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200"
                },

                {
                    id: 2,
                    name: "Red Velvet Cake",
                    quantity: 1,
                    price: 1299,
                    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200"
                }

            ]

        });

    }, [props.id]);

    if (!order) {

        return null;

    }

    return (

        <Box className="admin-order-details">

            <OrderHeader order={order} />

            <Grid

                container

                spacing={3}

            >

                <Grid size={{ xs: 12, md: 6 }}>

                    <OrderSummaryCard

                        order={order}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <PaymentInformationCard

                        order={order}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <CustomerInformationCard

                        order={order}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <ShippingAddressCard

                        order={order}

                    />

                </Grid>

                <Grid size={12}>

                    <OrderedItemsTable

                        items={order.items}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <OrderTimeline

                        order={order}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <UpdateOrderStatus

                        order={order}

                    />

                </Grid>
                <Grid size={12}>

                    <OrderNotesCard

                        order={order}

                    />

                </Grid>

            </Grid>

        </Box>

    );

}