import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    Typography
} from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

import "./OrderHeaderCard.css";

export default function OrderHeaderCard({ order }) {

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

        <Card className="order-header-card">

            <CardContent>

                <Box className="order-header-top">

                    <Box>

                        <Typography className="order-id">

                            {order.orderId}

                        </Typography>

                        <Typography className="placed-on">

                            Placed on {order.orderDate}

                        </Typography>

                    </Box>

                    <Chip

                        label={order.status}

                        color={getStatusColor(order.status)}

                    />

                </Box>

                <Grid
                    container
                    spacing={2}
                    sx={{ mt: 2 }}
                >

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <Box className="header-item">

                            <CalendarTodayOutlinedIcon />

                            <Box>

                                <Typography className="label">

                                    Order Date

                                </Typography>

                                <Typography className="value">

                                    {order.orderDate}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <Box className="header-item">

                            <LocalShippingOutlinedIcon />

                            <Box>

                                <Typography className="label">

                                    Delivery

                                </Typography>

                                <Typography className="value">

                                    {order.estimatedDelivery}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <Box className="header-item">

                            <PaymentsOutlinedIcon />

                            <Box>

                                <Typography className="label">

                                    Payment

                                </Typography>

                                <Typography className="value">

                                    {order.paymentMethod}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <Box className="header-item">

                            <CurrencyRupeeOutlinedIcon />

                            <Box>

                                <Typography className="label">

                                    Total Amount

                                </Typography>

                                <Typography className="value amount">

                                    ₹{order.amount}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

}