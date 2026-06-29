import {
    Box,
    Button,
    Typography
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useNavigate } from "react-router-dom";

import "./EmptyOrders.css";

export default function EmptyOrders() {

    const navigate = useNavigate();

    return (

        <Box className="empty-orders">

            <ShoppingBagOutlinedIcon className="empty-icon"/>

            <Typography className="empty-title">

                No Orders Yet

            </Typography>

            <Typography className="empty-description">

                Looks like you haven't placed any orders yet.
                Discover our delicious collection of cakes.

            </Typography>

            <Button

                variant="contained"

                startIcon={<ShoppingBagOutlinedIcon />}

                className="shop-button"

                onClick={() => navigate("/cakes")}

            >

                Shop Cakes

            </Button>

        </Box>

    );

}