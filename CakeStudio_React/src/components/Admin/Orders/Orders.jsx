import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";

import OrderHeader from "./OrderHeader";
import OrderFilters from "./OrderFilters";
import OrdersTable from "./OrdersTable";
import EmptyOrders from "./EmptyOrders";

import "./Orders.css";

export default function Orders() {

    const [orders] = useState([

        {
            id: 1,
            orderId: "ORD-1001",
            orderDate: "30 Jun 2026",
            customer: "Rahul Sharma",
            mobile: "9876543210",
            amount: 899,
            paymentMethod: "Card",
            paymentStatus: "Paid",
            orderStatus: "Delivered",
            transactionId: "txn_93JD82KSD"
        },

        {
            id: 2,
            orderId: "ORD-1002",
            orderDate: "30 Jun 2026",
            customer: "Priya Sharma",
            mobile: "9988776655",
            amount: 1499,
            paymentMethod: "UPI",
            paymentStatus: "Pending",
            orderStatus: "Processing",
            transactionId: "txn_83JSK392"
        },

        {
            id: 3,
            orderId: "ORD-1003",
            orderDate: "29 Jun 2026",
            customer: "Amit Patel",
            mobile: "9123456789",
            amount: 699,
            paymentMethod: "Cash on Delivery",
            paymentStatus: "Pending",
            orderStatus: "Confirmed",
            transactionId: "-"
        },

        {
            id: 4,
            orderId: "ORD-1004",
            orderDate: "29 Jun 2026",
            customer: "Neha Singh",
            mobile: "9871234567",
            amount: 2199,
            paymentMethod: "Card",
            paymentStatus: "Paid",
            orderStatus: "Out for Delivery",
            transactionId: "txn_82JDK882"
        }

    ]);

    const [search, setSearch] = useState("");

    const [paymentStatus, setPaymentStatus] = useState("All");

    const [orderStatus, setOrderStatus] = useState("All");

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const filteredOrders = orders.filter(order => {

        const searchMatch =

            order.orderId.toLowerCase().includes(search.toLowerCase()) ||

            order.customer.toLowerCase().includes(search.toLowerCase());

        const paymentMatch =

            paymentStatus === "All" ||

            order.paymentStatus === paymentStatus;

        const statusMatch =

            orderStatus === "All" ||

            order.orderStatus === orderStatus;

        return searchMatch && paymentMatch && statusMatch;

    });

    return (

        <Box className="orders-page">

            <OrderHeader />

            <OrderFilters

                search={search}
                setSearch={setSearch}

                paymentStatus={paymentStatus}
                setPaymentStatus={setPaymentStatus}

                orderStatus={orderStatus}
                setOrderStatus={setOrderStatus}

            />

            {

                filteredOrders.length === 0 ?

                    <EmptyOrders />

                    :

                    <OrdersTable

                        orders={filteredOrders}

                        page={page}

                        rowsPerPage={rowsPerPage}

                        setPage={setPage}

                        setRowsPerPage={setRowsPerPage}

                    />

            }

        </Box>

    );

}