import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper
} from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { useLocation, useNavigate } from "react-router-dom";

import "./AccountSidebar.css";

export default function AccountSidebar() {

    const navigate = useNavigate();

    const location = useLocation();

    const menuItems = [

        {
            label: "Overview",
            icon: <PersonOutlineOutlinedIcon />,
            path: "/my-account"
        },
        {
            label: "My Orders",
            icon: <Inventory2OutlinedIcon />,
            path: "/my-account/orders"
        },
        {
            label: "Addresses",
            icon: <LocationOnOutlinedIcon />,
            path: "/my-account/addresses"
        },
        {
            label: "Wishlist",
            icon: <FavoriteBorderOutlinedIcon />,
            path: "/my-account/wishlist"
        },
        {
            label: "Account Settings",
            icon: <SettingsOutlinedIcon />,
            path: "/my-account/settings"
        },
        {
            label: "Logout",
            icon: <LogoutOutlinedIcon />,
            path: "/logout"
        }

    ];

    return (

        <Paper className="account-sidebar">

            <List disablePadding>

                {

                    menuItems.map((item) => (

                        <ListItemButton

                            key={item.label}

                            selected={location.pathname === item.path}

                            onClick={() => navigate(item.path)}

                            className="sidebar-item"

                        >

                            <ListItemIcon className="sidebar-icon">

                                {item.icon}

                            </ListItemIcon>

                            <ListItemText

                                primary={item.label}

                            />

                        </ListItemButton>

                    ))

                }

            </List>

        </Paper>

    );

}