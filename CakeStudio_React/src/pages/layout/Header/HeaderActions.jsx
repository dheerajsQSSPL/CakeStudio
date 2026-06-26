import {
    Badge,
    Box,
    Button
} from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./HeaderActions.css";

const HeaderActions = () => {

    return (

        <Box className="header-actions">

            <Button
                variant="outlined"
                startIcon={<PersonOutlineOutlinedIcon />}
                className="login-btn"
            >
                Login
            </Button>

            <Button
                variant="contained"
                startIcon={
                    <Badge
                        badgeContent={2}
                        color="error"
                    >
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                }
                className="cart-btn"
            >
                Cart
            </Button>

        </Box>

    );

};

export default HeaderActions;