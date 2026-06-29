import DeliveryCard from "./DeliveryCard";
import OrderDetailsCard from "./OrderDetailsCard";
import PaymentCard from "./PaymentCard";
import SuccessHeader from "./SuccessHeader";
import useCart from "../../hooks/useCart"
import OrderSummaryCard from "./OrderSummaryCard";
import { Box } from "@mui/material"
import Breadcrumb from "../common/Breadcrumb/Breadcrumb"
import SuccessActions from "./SuccessActions";
const order = {

    orderId: "ORD-1001",

    transactionId: "txn_3PH82JSH928",

    orderDate: "29 Jun 2026, 10:30 AM",

    estimatedDelivery: "30 Jun 2026, 4 PM - 6 PM",

    paymentMethod: "Credit Card",

    paymentStatus: "Paid"

};

const shipping = {

    fullName: "Dr Raj",

    mobile: "9876543210",

    email: "raj@gmail.com",

    address: "123 Sweet Street",

    landmark: "Near City Mall",

    city: "Bengaluru",

    state: "Karnataka",

    pincode: "560001"

};


export default function OrderSuccessComponent(props) {
    
    const order = {

        orderId: props.orderId,

        transactionId: "txn_83HDJ82KSJ",

        paymentMethod: "Credit Card",

        paymentStatus: "Paid",

        orderDate: "29 Jun 2026",

        estimatedDelivery: "30 Jun 2026"

    };

    const shipping = {

        fullName: "Dr Raj",

        mobile: "9876543210",

        address: "123 Sweet Street",

        landmark: "Near City Mall",

        city: "Bangalore",

        state: "Karnataka",

        pincode: "560001"

    };

    const items = [

        {
            id: 1,
            name: "Chocolate Truffle",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",
            quantity: 2,
            price: 899
        }

    ];

    return (

        <Box className="order-success-page">

            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Order Success" }
                ]}
            />

            <SuccessHeader />

            <OrderDetailsCard
                order={order}
                shipping={shipping}
            />

            <OrderSummaryCard
                items={items}
            />

            <SuccessActions
                orderId={order.orderId}
            />

        </Box>

    );


}