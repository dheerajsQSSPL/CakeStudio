import {
    Box,
    Typography
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import "./SuccessHeader.css";

const SuccessHeader = () => {

    return (

        <Box className="success-header">

            <Box className="success-icon-container">

                <CheckCircleRoundedIcon
                    className="success-icon"
                />

                <span className="dot dot1"></span>
                <span className="dot dot2"></span>
                <span className="dot dot3"></span>
                <span className="dot dot4"></span>
                <span className="dot dot5"></span>
                <span className="dot dot6"></span>

            </Box>

            <Typography className="success-title">

                Order Placed Successfully!

            </Typography>

            <Typography className="success-subtitle">

                Thank you for choosing CakeStudio.

            </Typography>

            <Typography className="success-description">

                We've received your order and it's now being prepared with
                love. You'll receive an email confirmation and delivery
                updates shortly.

            </Typography>

        </Box>

    );

};

export default SuccessHeader;