import {
    Box,
    Button,
    Typography
} from "@mui/material";

import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import "./OrderHeader.css";

export default function OrderHeader() {

    return (

        <Box className="order-header">

            <Box>

                <Typography className="order-title">

                    Orders

                </Typography>

                <Typography className="order-subtitle">

                    Manage customer orders, payments and deliveries.

                </Typography>

            </Box>

            <Button

                variant="contained"

                startIcon={<RefreshOutlinedIcon />}

                className="refresh-orders-btn"

                onClick={() => console.log("Refresh Orders")}

            >

                Refresh

            </Button>

        </Box>

    );

}