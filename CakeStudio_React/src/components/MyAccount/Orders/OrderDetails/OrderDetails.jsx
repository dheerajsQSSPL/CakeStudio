import {
    Box,
    Grid,
    Typography
} from "@mui/material";


import OrderHeaderCard from "./OrderHeaderCard";
import OrderedItemsCard from "./OrderedItemsCard";
import OrderTrackingCard from "./OrderTrackingCard";
import ShippingAddressCard from "./ShippingAddressCard";
import PaymentDetailsCard from "./PaymentDetailsCard";
import AccountSupportCard from "../../AccountSupportCard";

import "./OrderDetails.css";

export default function OrderDetails(props) {

    const order = {

        orderId: props.id,

        orderDate: "29 Jun 2026, 10:30 AM",

        estimatedDelivery: "30 Jun 2026, 4 PM - 6 PM",

        status: "Delivered",

        paymentMethod: "UPI",

        transactionId: "pay_QXC73KD29",

        paymentStatus: "Paid",

        amount: 1798

    };

    const items = [

        {

            id: 1,

            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",

            name: "Chocolate Truffle Cake",

            quantity: 2,

            price: 899

        }

    ];

    const shipping = {

        fullName: "Dr Raj",

        mobile: "+91 9876543210",

        address: "123 Sweet Street",

        landmark: "Near City Mall",

        city: "Bangalore",

        state: "Karnataka",

        pincode: "560001"

    };

    const tracking = [

        {

            title: "Order Placed",

            date: "29 Jun 2026, 10:30 AM",

            completed: true

        },

        {

            title: "Order Confirmed",

            date: "29 Jun 2026, 10:45 AM",

            completed: true

        },

        {

            title: "Preparing",

            date: "29 Jun 2026, 12:00 PM",

            completed: true

        },

        {

            title: "Out For Delivery",

            date: "30 Jun 2026, 11:30 AM",

            completed: true

        },

        {

            title: "Delivered",

            date: "30 Jun 2026, 04:30 PM",

            completed: true

        }

    ];

    return (

        <Box>

            <Typography className="page-title">

                Order Details

            </Typography>

            <Typography className="page-subtitle">

                View and track your order.

            </Typography>

            <OrderHeaderCard

                order={order}

            />

            <OrderedItemsCard

                items={items}

            />

            <OrderTrackingCard

                tracking={tracking}

            />

            <Grid
                container
                spacing={3}
                sx={{ mt: 1 }}
            >

                <Grid size={{ xs: 12, md: 6 }}>

                    <ShippingAddressCard

                        shipping={shipping}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <PaymentDetailsCard

                        order={order}

                    />

                </Grid>

            </Grid>

            <Box mt={4}>

                <AccountSupportCard />

            </Box>

        </Box>

    );

}