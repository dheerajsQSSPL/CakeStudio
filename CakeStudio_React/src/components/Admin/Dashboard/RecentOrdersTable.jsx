import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

import "./RecentOrdersTable.css";

const orders = [

    {
        id: "#1001",
        customer: "Rahul Sharma",
        date: "25 May 2024",
        amount: "₹1,798",
        status: "Delivered"
    },

    {
        id: "#1002",
        customer: "Priya Verma",
        date: "25 May 2024",
        amount: "₹899",
        status: "Processing"
    },

    {
        id: "#1003",
        customer: "Amit Patel",
        date: "24 May 2024",
        amount: "₹1,299",
        status: "Confirmed"
    },

    {
        id: "#1004",
        customer: "Neha Singh",
        date: "24 May 2024",
        amount: "₹2,198",
        status: "Out for Delivery"
    },

    {
        id: "#1005",
        customer: "Vikram Mehta",
        date: "23 May 2024",
        amount: "₹649",
        status: "Pending"
    }

];

const getChipColor = (status) => {

    switch (status) {

        case "Delivered":

            return {
                bg: "#e8f8ef",
                color: "#2e7d32"
            };

        case "Processing":

            return {
                bg: "#e8f1ff",
                color: "#1565c0"
            };

        case "Confirmed":

            return {
                bg: "#fff7e8",
                color: "#f57c00"
            };

        case "Out for Delivery":

            return {
                bg: "#f3edff",
                color: "#7b4dff"
            };

        default:

            return {
                bg: "#ffe9ef",
                color: "#ff5b84"
            };

    }

};

export default function RecentOrdersTable() {

    return (

        <Card className="recent-orders-card">

            <CardContent>

                <Box className="table-header">

                    <Typography className="table-title">

                        Recent Orders

                    </Typography>

                    <Typography className="view-all">

                        View All

                    </Typography>

                </Box>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Order ID</TableCell>

                            <TableCell>Customer</TableCell>

                            <TableCell>Date</TableCell>

                            <TableCell>Amount</TableCell>

                            <TableCell>Status</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            orders.map((order) => {

                                const chip = getChipColor(order.status);

                                return (

                                    <TableRow key={order.id} hover>

                                        <TableCell>

                                            <Typography fontWeight={600}>

                                                {order.id}

                                            </Typography>

                                        </TableCell>

                                        <TableCell>

                                            <Box className="customer-box">

                                                <Avatar

                                                    sx={{
                                                        width: 34,
                                                        height: 34
                                                    }}

                                                >

                                                    {order.customer[0]}

                                                </Avatar>

                                                <Typography>

                                                    {order.customer}

                                                </Typography>

                                            </Box>

                                        </TableCell>

                                        <TableCell>

                                            {order.date}

                                        </TableCell>

                                        <TableCell>

                                            <strong>

                                                {order.amount}

                                            </strong>

                                        </TableCell>

                                        <TableCell>

                                            <Chip

                                                label={order.status}

                                                size="small"

                                                sx={{

                                                    background: chip.bg,

                                                    color: chip.color,

                                                    fontWeight: 600

                                                }}

                                            />

                                        </TableCell>

                                    </TableRow>

                                );

                            })

                        }

                    </TableBody>

                </Table>

            </CardContent>

        </Card>

    );

}