import {
    Box,
    Button,
    Typography
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import "./EmptyOrders.css";

export default function EmptyOrders() {

    return (

        <Box className="empty-orders">

            <Box className="empty-orders-icon">

                <ShoppingBagOutlinedIcon />

            </Box>

            <Typography className="empty-orders-title">

                No Orders Found

            </Typography>

            <Typography className="empty-orders-subtitle">

                There are no orders matching your current filters.
                Try resetting the filters or check back later.

            </Typography>

            <Button

                variant="contained"

                startIcon={<RefreshOutlinedIcon />}

                className="empty-orders-btn"

                onClick={() => window.location.reload()}

            >

                Refresh Orders

            </Button>

        </Box>

    );

}