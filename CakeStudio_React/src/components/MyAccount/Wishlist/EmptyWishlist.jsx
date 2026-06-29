import {
    Box,
    Button,
    Typography
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useNavigate } from "react-router-dom";

import "./EmptyWishlist.css";

export default function EmptyWishlist() {

    const navigate = useNavigate();

    return (

        <Box className="empty-wishlist">

            <Box className="wishlist-icon-wrapper">

                <FavoriteBorderOutlinedIcon className="wishlist-empty-icon" />

            </Box>

            <Typography className="empty-title">

                Your Wishlist is Empty

            </Typography>

            <Typography className="empty-description">

                Save your favorite cakes to your wishlist so you can
                easily find them later and order whenever you're ready.

            </Typography>

            <Button

                variant="contained"

                startIcon={<ShoppingBagOutlinedIcon />}

                className="browse-btn"

                onClick={() => navigate("/cakes")}

            >

                Browse Cakes

            </Button>

        </Box>

    );

}