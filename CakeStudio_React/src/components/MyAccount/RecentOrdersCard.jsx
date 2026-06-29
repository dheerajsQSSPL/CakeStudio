import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Typography
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import { useNavigate } from "react-router-dom";

import "./RecentOrdersCard.css";

export default function RecentOrdersCard({ orders }) {

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

        <Card className="recent-orders-card">

            <CardContent>

                <Box className="orders-header">

                    <Typography className="orders-title">

                        Recent Orders

                    </Typography>

                    <Button

                        endIcon={<ArrowForwardOutlinedIcon />}

                        onClick={() =>
                            navigate("/my-account/orders")
                        }

                    >

                        View All

                    </Button>

                </Box>

                {

                    orders.map((order, index) => (

                        <Box key={order.id}>

                            <Box className="order-item">

                                <img

                                    src={order.image}

                                    alt={order.cakeName}

                                    className="order-image"

                                />

                                <Box className="order-content">

                                    <Typography className="cake-name">

                                        {order.cakeName}

                                    </Typography>

                                    <Typography className="order-id">

                                        #{order.id}

                                    </Typography>

                                    <Typography className="order-date">

                                        {order.date}

                                    </Typography>

                                </Box>

                                <Box className="order-right">

                                    <Typography className="order-price">

                                        ₹{order.amount}

                                    </Typography>

                                    <Chip

                                        label={order.status}

                                        color={getStatusColor(order.status)}

                                        size="small"

                                    />

                                    <Button

                                        size="small"

                                        sx={{ mt: 1 }}

                                        onClick={() =>
                                            navigate(`/my-account/orders/${order.id}`)
                                        }

                                    >

                                        View Details

                                    </Button>

                                </Box>

                            </Box>

                            {

                                index !== orders.length - 1 &&

                                <Divider sx={{ my: 2 }} />

                            }

                        </Box>

                    ))

                }

            </CardContent>

        </Card>

    );

}