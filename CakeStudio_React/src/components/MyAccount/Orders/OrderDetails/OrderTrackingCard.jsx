import {
    Box,
    Card,
    CardContent,
    Typography
} from "@mui/material";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

import "./OrderTrackingCard.css";

export default function OrderTrackingCard({ tracking }) {

    return (

        <Card className="tracking-card">

            <CardContent>

                <Box className="tracking-header">

                    <LocalShippingOutlinedIcon />

                    <Typography className="tracking-title">

                        Order Tracking

                    </Typography>

                </Box>

                <Box className="tracking-timeline">

                    {

                        tracking.map((step, index) => (

                            <Box
                                key={step.title}
                                className="tracking-step"
                            >

                                <Box className="timeline-left">

                                    {

                                        step.completed ?

                                            <CheckCircleRoundedIcon className="completed-icon" />

                                            :

                                            <RadioButtonUncheckedRoundedIcon className="pending-icon" />

                                    }

                                    {

                                        index !== tracking.length - 1 &&

                                        <span className="timeline-line"></span>

                                    }

                                </Box>

                                <Box className="timeline-content">

                                    <Typography className="step-title">

                                        {step.title}

                                    </Typography>

                                    <Typography className="step-date">

                                        {step.date}

                                    </Typography>

                                    <Typography className="step-description">

                                        {

                                            step.title === "Order Placed" &&
                                            "Your order has been placed successfully."

                                        }

                                        {

                                            step.title === "Order Confirmed" &&
                                            "Your order has been confirmed."

                                        }

                                        {

                                            step.title === "Preparing" &&
                                            "Our chefs are preparing your delicious cake."

                                        }

                                        {

                                            step.title === "Out For Delivery" &&
                                            "Your order is on its way."

                                        }

                                        {

                                            step.title === "Delivered" &&
                                            "Your order has been delivered."

                                        }

                                    </Typography>

                                </Box>

                            </Box>

                        ))

                    }

                </Box>

            </CardContent>

        </Card>

    );

}