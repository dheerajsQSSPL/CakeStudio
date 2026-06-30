import {
    Box,
    Breadcrumbs,
    Chip,
    Link,
    Typography
} from "@mui/material";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { useNavigate } from "react-router-dom";

import "./OrderHeader.css";

export default function OrderHeader({

    order

}) {

    const navigate = useNavigate();

    const getStatusStyle = () => {

        switch (order.orderStatus) {

            case "Delivered":

                return {

                    background: "#e8f8ef",

                    color: "#2e7d32"

                };

            case "Processing":

                return {

                    background: "#f3edff",

                    color: "#7b4dff"

                };

            case "Confirmed":

                return {

                    background: "#e8f1ff",

                    color: "#1565c0"

                };

            case "Pending":

                return {

                    background: "#fff8e8",

                    color: "#f57c00"

                };

            case "Cancelled":

                return {

                    background: "#fdeaea",

                    color: "#d32f2f"

                };

            default:

                return {

                    background: "#f5f5f5",

                    color: "#666"

                };

        }

    };

    const style = getStatusStyle();

    return (

        <>

            <Breadcrumbs>

                <Link

                    underline="hover"

                    sx={{

                        cursor: "pointer",

                        color: "#ff5b84",

                        display: "flex",

                        alignItems: "center",

                        gap: .5

                    }}

                    onClick={() => navigate("/admin/orders")}

                >

                    <ArrowBackOutlinedIcon fontSize="small" />

                    Orders

                </Link>

                <Typography>

                    {order.orderId}

                </Typography>

            </Breadcrumbs>

            <Box className="order-details-header">

                <Box>

                    <Typography className="order-details-title">

                        Order {order.orderId}

                    </Typography>

                    <Typography className="order-details-subtitle">

                        Ordered on {order.orderDate}

                    </Typography>

                </Box>

                <Box className="order-details-right">

                    <Typography className="order-total">

                        ₹{order.totalAmount}

                    </Typography>

                    <Chip

                        label={order.orderStatus}

                        sx={{

                            background: style.background,

                            color: style.color,

                            fontWeight: 600

                        }}

                    />

                </Box>

            </Box>

        </>

    );

}