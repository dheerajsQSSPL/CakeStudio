import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography
} from "@mui/material";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const OrderInfoCard = ({ order }) => {

    return (

        <Card
            sx={{
                borderRadius: 4,
                border: "1px solid #f5d9e2",
                boxShadow: "none",
                mb: 4
            }}
        >

            <CardContent sx={{ p: 0 }}>

                {/* Order Id */}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                        py: 4
                    }}
                >

                    <ReceiptLongOutlinedIcon
                        sx={{
                            color: "#ff5b84",
                            fontSize: 34
                        }}
                    />

                    <Box>

                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >

                            ORDER ID

                        </Typography>

                        <Typography
                            variant="h5"
                            fontWeight={700}
                            color="#2eb85c"
                        >

                            {order.orderId}

                        </Typography>

                    </Box>

                </Box>

                {

                    order.transactionId &&

                    <>

                        <Divider />

                        <Box
                            sx={{
                                py: 2,
                                textAlign: "center"
                            }}
                        >

                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >

                                TRANSACTION ID

                            </Typography>

                            <Typography
                                fontWeight={600}
                            >

                                {order.transactionId}

                            </Typography>

                        </Box>

                    </>

                }

                <Divider />

                <Grid container>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            p: 3,
                            borderRight: {
                                md: "1px solid #f3e3e8"
                            }
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2
                            }}
                        >

                            <CalendarTodayOutlinedIcon
                                sx={{
                                    color: "#ff5b84"
                                }}
                            />

                            <Box>

                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                >

                                    Order Date

                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >

                                    {order.orderDate}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            p: 3
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2
                            }}
                        >

                            <LocalShippingOutlinedIcon
                                sx={{
                                    color: "#ff5b84"
                                }}
                            />

                            <Box>

                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                >

                                    Estimated Delivery

                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >

                                    {order.estimatedDelivery}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                </Grid>

                <Divider />

                <Grid container>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            p: 3,
                            borderRight: {
                                md: "1px solid #f3e3e8"
                            }
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2
                            }}
                        >

                            <CreditCardOutlinedIcon
                                sx={{
                                    color: "#ff5b84"
                                }}
                            />

                            <Box>

                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                >

                                    Payment Method

                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >

                                    {order.paymentMethod}

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            p: 3
                        }}
                    >

                        <Typography
                            variant="body2"
                            fontWeight={600}
                        >

                            Payment Status

                        </Typography>

                        <Typography
                            sx={{
                                color:
                                    order.paymentStatus === "Paid"
                                        ? "#2eb85c"
                                        : "#ff9800",
                                fontWeight: 700
                            }}
                        >

                            {order.paymentStatus}

                        </Typography>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

};

export default OrderInfoCard;