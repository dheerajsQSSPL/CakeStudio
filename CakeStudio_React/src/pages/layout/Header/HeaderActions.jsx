import {
    Badge,
    Box,
    Button
} from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart"
import "./HeaderActions.css";

const HeaderActions = () => {

    const navigate = useNavigate();

    const { cartCount } = useCart();

    return (

        <Box className="header-actions">

            <Button
                variant="outlined"
                startIcon={<PersonOutlineOutlinedIcon />}
                className="login-btn"
                onClick={() => navigate("/login")}
            >
                Login
            </Button>

            <Button
                variant="contained"
                className="cart-btn"
                startIcon={
                    <Badge
                        badgeContent={cartCount}
                        color="error"
                    >
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                }
                onClick={() => navigate("/cart")}
            >
                Cart
            </Button>

        </Box>

    );

};

export default HeaderActions;