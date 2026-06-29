import {
    Box,
    Card,
    CardContent,
    Divider,
    Typography
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const DeliveryCard = ({ shipping }) => {

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

                    <LocationOnOutlinedIcon
                        sx={{ color: "#ff5b84" }}
                    />

                    <Typography
                        variant="h6"
                        fontWeight={700}
                    >

                        Delivery Address

                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        mb: 2
                    }}
                >

                    <PersonOutlineOutlinedIcon
                        sx={{ color: "#ff5b84" }}
                    />

                    <Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >

                            Recipient

                        </Typography>

                        <Typography
                            fontWeight={600}
                        >

                            {shipping.fullName}

                        </Typography>

                    </Box>

                </Box>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        mb: 2
                    }}
                >

                    <CallOutlinedIcon
                        sx={{ color: "#ff5b84" }}
                    />

                    <Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >

                            Mobile

                        </Typography>

                        <Typography
                            fontWeight={600}
                        >

                            {shipping.mobile}

                        </Typography>

                    </Box>

                </Box>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        display: "flex",
                        gap: 2
                    }}
                >

                    <HomeOutlinedIcon
                        sx={{ color: "#ff5b84" }}
                    />

                    <Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >

                            Address

                        </Typography>

                        <Typography
                            fontWeight={600}
                        >

                            {shipping.address}

                        </Typography>

                        {

                            shipping.landmark &&

                            <Typography
                                color="text.secondary"
                            >

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

                </Box>

            </CardContent>

        </Card>

    );

};

export default DeliveryCard;