import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    Typography
} from "@mui/material";

import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

const PaymentCard = ({ order }) => {

    const isPaid = order.paymentStatus === "Paid";

    return (

        <Card
            sx={{
                borderRadius: 4,
                border: "1px solid #f5d9e2",
                boxShadow: "none",
                mb: 4
            }}
        >

            <CardContent>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 3
                    }}
                >

                    <PaymentsOutlinedIcon
                        sx={{
                            color: "#ff5b84"
                        }}
                    />

                    <Typography
                        variant="h6"
                        fontWeight={700}
                    >

                        Payment Details

                    </Typography>

                </Box>

                {/* Payment Method */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center"
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
                                color="text.secondary"
                            >

                                Payment Method

                            </Typography>

                            <Typography
                                fontWeight={600}
                            >

                                {order.paymentMethod}

                            </Typography>

                        </Box>

                    </Box>

                    <Chip

                        label={order.paymentStatus}

                        color={
                            isPaid
                                ? "success"
                                : "warning"
                        }

                        variant="filled"

                    />

                </Box>

                {

                    order.transactionId &&

                    <>

                        <Divider sx={{ my: 2 }} />

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center"
                            }}
                        >

                            <ReceiptOutlinedIcon
                                sx={{
                                    color: "#ff5b84"
                                }}
                            />

                            <Box>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >

                                    Transaction ID

                                </Typography>

                                <Typography
                                    fontWeight={600}
                                    sx={{
                                        wordBreak: "break-all"
                                    }}
                                >

                                    {order.transactionId}

                                </Typography>

                            </Box>

                        </Box>

                    </>

                }

            </CardContent>

        </Card>

    );

};

export default PaymentCard;