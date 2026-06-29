import {
    Box,
    Card,
    CardContent,
    Divider,
    Typography
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import "./ShippingAddressCard.css";

export default function ShippingAddressCard({ shipping }) {

    return (

        <Card className="shipping-card">

            <CardContent>

                <Box className="shipping-header">

                    <LocationOnOutlinedIcon />

                    <Typography className="shipping-title">

                        Delivery Address

                    </Typography>

                </Box>

                <Divider sx={{ mb:3 }} />

                <Box className="address-item">

                    <PersonOutlineOutlinedIcon />

                    <Box>

                        <Typography className="address-label">

                            Recipient

                        </Typography>

                        <Typography className="address-value">

                            {shipping.fullName}

                        </Typography>

                    </Box>

                </Box>

                <Box className="address-item">

                    <CallOutlinedIcon />

                    <Box>

                        <Typography className="address-label">

                            Mobile

                        </Typography>

                        <Typography className="address-value">

                            {shipping.mobile}

                        </Typography>

                    </Box>

                </Box>

                <Box className="address-box">

                    <Typography className="address-label">

                        Delivery Address

                    </Typography>

                    <Typography className="address-text">

                        {shipping.address}

                    </Typography>

                    {

                        shipping.landmark &&

                        <Typography className="address-text">

                            {shipping.landmark}

                        </Typography>

                    }

                    <Typography className="address-text">

                        {shipping.city}, {shipping.state}

                    </Typography>

                    <Typography className="address-text">

                        {shipping.pincode}

                    </Typography>

                </Box>

            </CardContent>

        </Card>

    );

}