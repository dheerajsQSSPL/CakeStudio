import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Typography
} from "@mui/material";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { useNavigate } from "react-router-dom";

import "./OrderCard.css";

export default function OrderCard({ order }) {

    const navigate = useNavigate();

    const getStatusColor = (status) => {

        switch (status) {

            case "Delivered":
                return "success";

            case "Processing":
                return "warning";

            case "Cancelled":
                return "error";

            default:
                return "default";

        }

    };

    return (

        <Card className="order-card">

            <CardContent>

                <Box className="order-top">

                    <Box className="order-product">

                        <img
                            src={order.image}
                            alt={order.cakeName}
                            className="order-image"
                        />

                        <Box>

                            <Typography className="cake-title">

                                {order.cakeName}

                            </Typography>

                            <Typography className="cake-qty">

                                Qty : {order.quantity}

                            </Typography>

                        </Box>

                    </Box>

                    <Chip

                        label={order.status}

                        color={getStatusColor(order.status)}

                    />

                </Box>

                <Box className="order-details">

                    <Box className="detail">

                        <ReceiptLongOutlinedIcon />

                        <Box>

                            <Typography className="label">

                                Order ID

                            </Typography>

                            <Typography>

                                {order.id}

                            </Typography>

                        </Box>

                    </Box>

                    <Box className="detail">

                        <CalendarTodayOutlinedIcon />

                        <Box>

                            <Typography className="label">

                                Ordered On

                            </Typography>

                            <Typography>

                                {order.orderDate}

                            </Typography>

                        </Box>

                    </Box>

                    <Box className="detail">

                        <LocalShippingOutlinedIcon />

                        <Box>

                            <Typography className="label">

                                Delivery

                            </Typography>

                            <Typography>

                                {order.deliveryDate}

                            </Typography>

                        </Box>

                    </Box>

                    <Box className="detail">

                        <PaymentsOutlinedIcon />

                        <Box>

                            <Typography className="label">

                                Payment

                            </Typography>

                            <Typography>

                                {order.paymentMethod}

                            </Typography>

                        </Box>

                    </Box>

                </Box>

                <Box className="order-footer">

                    <Typography className="amount">

                        ₹{order.amount}

                    </Typography>

                    <Box className="buttons">

                        <Button

                            variant="outlined"

                            startIcon={<VisibilityOutlinedIcon />}

                            onClick={() =>
                                navigate(`/my-account/orders/${order.id}`)
                            }

                        >

                            View Details

                        </Button>

                        <Button

                            variant="contained"

                            startIcon={<ShoppingCartOutlinedIcon />}

                        >

                            Reorder

                        </Button>

                    </Box>

                </Box>

            </CardContent>

        </Card>

    );

}