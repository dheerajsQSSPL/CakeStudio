import {
    Box,
    Card,
    CardContent,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
    Collapse
} from "@mui/material";

import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import "./payment.css"
const PaymentMethods = ({

    paymentMethod,

    setPaymentMethod

}) => {

    const handleChange = (e) => {

        setPaymentMethod(e.target.value);

    };

    return (

        <Card
            sx={{
                mt: 4,
                borderRadius: 4,
                border: "1px solid #f4dbe2",
                boxShadow: "none"
            }}
        >

            <CardContent sx={{ p: 4 }}>

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

                        Payment Method

                    </Typography>

                </Box>

                <RadioGroup
                    value={paymentMethod}
                    onChange={handleChange}
                >

                    <FormControlLabel
                        value="cod"
                        control={<Radio />}
                        label="Cash on Delivery"
                    />

                    <FormControlLabel
                        value="card"
                        control={<Radio />}
                        label="Credit / Debit Card"
                    />

                    <FormControlLabel
                        value="upi"
                        control={<Radio />}
                        label="UPI"
                    />

                </RadioGroup>

                {/* Card Details */}

                <Collapse
                    in={paymentMethod === "card"}
                >

                    <Box sx={{ mt: 3 }}>

                        <Typography
                            fontWeight={600}
                            mb={2}
                        >

                            Card Details

                        </Typography>

                        <Box
                            sx={{
                                display: "grid",
                                gap: 2
                            }}
                        >

                            <input
                                className="payment-input"
                                placeholder="Card Number"
                            />

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2
                                }}
                            >

                                <input
                                    className="payment-input"
                                    placeholder="MM / YY"
                                />

                                <input
                                    className="payment-input"
                                    placeholder="CVV"
                                />

                            </Box>

                        </Box>

                    </Box>

                </Collapse>

                {/* UPI */}

                <Collapse
                    in={paymentMethod === "upi"}
                >

                    <Box sx={{ mt: 3 }}>

                        <Typography
                            fontWeight={600}
                            mb={2}
                        >

                            UPI Details

                        </Typography>

                        <input
                            className="payment-input"
                            placeholder="example@upi"
                        />

                    </Box>

                </Collapse>

                {/* COD */}

                <Collapse
                    in={paymentMethod === "cod"}
                >

                    <Box
                        sx={{
                            mt: 3,
                            p: 2,
                            background: "#fff8fa",
                            borderRadius: 2,
                            border: "1px solid #ffd8e3"
                        }}
                    >

                        <Typography>

                            Pay when your order is delivered.

                        </Typography>

                    </Box>

                </Collapse>

            </CardContent>

        </Card>

    );

};

export default PaymentMethods;