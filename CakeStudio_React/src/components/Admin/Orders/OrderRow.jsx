import {
    Button,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { useNavigate } from "react-router-dom";

import PaymentStatusChip from "./PaymentStatusChip";
import OrderStatusChip from "./OrderStatusChip";

import "./OrderRow.css";

export default function OrderRow({

    order

}) {

    const navigate = useNavigate();

    return (

        <TableRow hover>

            <TableCell>

                <Typography className="order-id">

                    {order.orderId}

                </Typography>

            </TableCell>

            <TableCell>

                {order.orderDate}

            </TableCell>

            <TableCell>

                <Typography className="customer-name">

                    {order.customer}

                </Typography>

                <Typography className="customer-mobile">

                    {order.mobile}

                </Typography>

            </TableCell>

            <TableCell>

                <Typography className="order-amount">

                    ₹{order.amount}

                </Typography>

            </TableCell>

            <TableCell>

                <PaymentStatusChip

                    status={order.paymentStatus}

                />

            </TableCell>

            <TableCell>

                <OrderStatusChip

                    status={order.orderStatus}

                />

            </TableCell>

            <TableCell>

                <Typography className="transaction-id">

                    {order.transactionId}

                </Typography>

            </TableCell>

            <TableCell align="center">

                <Button

                    variant="outlined"

                    startIcon={<VisibilityOutlinedIcon />}

                    className="view-order-btn"

                    onClick={() =>

                        navigate(`/admin/orders/${order.orderId}`)

                    }

                >

                    View

                </Button>

            </TableCell>

        </TableRow>

    );

}