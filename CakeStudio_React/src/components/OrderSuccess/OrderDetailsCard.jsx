import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Typography
} from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import "./OrderDetailsCard.css";

export default function OrderDetailsCard({

    order,

    shipping

}) {

    return (

        <Card className="order-details-card">

            <CardContent>

                <Box className="details-header">

                    <Inventory2OutlinedIcon className="details-icon"/>

                    <Typography className="details-title">

                        Order Details

                    </Typography>

                </Box>

                <Grid
                    container
                    spacing={3}
                >

                    <Grid size={{ xs:12, md:6 }}>

                        <Box className="detail-row">

                            <ReceiptLongOutlinedIcon/>

                            <Box>

                                <Typography className="detail-label">

                                    Order ID

                                </Typography>

                                <Typography className="detail-value">

                                    {order.orderId}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    {

                        order.transactionId &&

                        <Grid size={{ xs:12, md:6 }}>

                            <Box className="detail-row">

                                <PaymentsOutlinedIcon/>

                                <Box>

                                    <Typography className="detail-label">

                                        Transaction ID

                                    </Typography>

                                    <Typography className="detail-value">

                                        {order.transactionId}

                                    </Typography>

                                </Box>

                            </Box>

                        </Grid>

                    }

                    <Grid size={{ xs:12, md:6 }}>

                        <Box className="detail-row">

                            <CalendarMonthOutlinedIcon/>

                            <Box>

                                <Typography className="detail-label">

                                    Order Date

                                </Typography>

                                <Typography className="detail-value">

                                    {order.orderDate}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <Box className="detail-row">

                            <LocalShippingOutlinedIcon/>

                            <Box>

                                <Typography className="detail-label">

                                    Estimated Delivery

                                </Typography>

                                <Typography className="detail-value">

                                    {order.estimatedDelivery}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <Box className="detail-row">

                            <PaymentsOutlinedIcon/>

                            <Box>

                                <Typography className="detail-label">

                                    Payment Method

                                </Typography>

                                <Typography className="detail-value">

                                    {order.paymentMethod}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <Box className="detail-row">

                            <PaymentsOutlinedIcon/>

                            <Box>

                                <Typography className="detail-label">

                                    Payment Status

                                </Typography>

                                <Chip

                                    size="small"

                                    color={
                                        order.paymentStatus === "Paid"

                                            ? "success"

                                            : "warning"
                                    }

                                    label={order.paymentStatus}

                                />

                            </Box>

                        </Box>

                    </Grid>

                </Grid>

                <Divider className="address-divider"/>

                <Box className="address-header">

                    <LocationOnOutlinedIcon/>

                    <Typography>

                        Delivery Address

                    </Typography>

                </Box>

                <Box className="address-box">

                    <Typography className="customer-name">

                        {shipping.fullName}

                    </Typography>

                    <Typography>

                        {shipping.mobile}

                    </Typography>

                    <Typography>

                        {shipping.address}

                    </Typography>

                    {

                        shipping.landmark &&

                        <Typography>

                            {shipping.landmark}

                        </Typography>

                    }

                    <Typography>

                        {shipping.city}, {shipping.state}

                    </Typography>

                    <Typography>

                        {shipping.pincode}

                    </Typography>

                </Box>

            </CardContent>

        </Card>

    );

}