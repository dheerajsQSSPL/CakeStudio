import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { useLocation, useNavigate } from "react-router-dom";

import "./AdminSidebar.css";

import logo from "../../../../assets/images/logo/logo_.png"
import { useState } from "react";
import LogoutDialog from "../../../../components/Admin/common/LogoutDialog/LogoutDialog";

export default function AdminSidebar({

    open

}) {

    const navigate = useNavigate();
    const [openLogout, setOpenLogout] = useState(false);
    const location = useLocation();

    const menuItems = [

        {
            label: "Dashboard",
            icon: <DashboardOutlinedIcon />,
            path: "/admin/dashboard"
        },

        {
            label: "Cakes",
            icon: <CakeOutlinedIcon />,
            path: "/admin/cakes"
        },

        {
            label: "Orders",
            icon: <ShoppingBagOutlinedIcon />,
            path: "/admin/orders"
        },

        {
            label: "Categories",
            icon: <CategoryOutlinedIcon />,
            path: "/admin/categories"
        },

        {
            label: "Users",
            icon: <PeopleOutlineOutlinedIcon />,
            path: "/admin/users"
        },

        {
            label: "Reviews",
            icon: <ReviewsOutlinedIcon />,
            path: "/admin/reviews"
        },

        {
            label: "Offers",
            icon: <LocalOfferOutlinedIcon />,
            path: "/admin/offers"
        },

        {
            label: "Settings",
            icon: <SettingsOutlinedIcon />,
            path: "/admin/settings"
        }

    ];

    return (
        <>
            <Box

                className={`admin-sidebar ${open ? "expanded" : "collapsed"}`}

            >

                <Box className="admin-logo">

                    {/* <img

                    src={logo}

                    alt="CakeStudio"

                /> */}

                    {

                        open &&

                        <Box>

                            <Typography className="logo-title">

                                CakeStudio

                            </Typography>

                            <Typography className="logo-subtitle">

                                ADMIN PANEL

                            </Typography>

                        </Box>

                    }

                </Box>

                <Divider />

                <List>

                    {

                        menuItems.map(item => (

                            <ListItemButton

                                key={item.label}

                                selected={location.pathname === item.path}

                                className="admin-menu-item"

                                onClick={() => navigate(item.path)}

                            >

                                <ListItemIcon>

                                    {item.icon}

                                </ListItemIcon>

                                {

                                    open &&

                                    <ListItemText

                                        primary={item.label}

                                    />

                                }

                            </ListItemButton>

                        ))

                    }

                </List>

                <Divider />

                <List>

                    <ListItemButton

                        className="admin-menu-item"

                        onClick={() => setOpenLogout(true)}

                    >

                        <ListItemIcon>

                            <LogoutOutlinedIcon />

                        </ListItemIcon>

                        {

                            open &&

                            <ListItemText

                                primary="Logout"

                            />

                        }

                    </ListItemButton>

                </List>

            </Box>
            <LogoutDialog

                open={openLogout}

                onClose={() => setOpenLogout(false)}

                onConfirm={() => {

                    setOpenLogout(false);

                    // Clear token, logout API, etc.

                    navigate("/login");

                }}

            />
        </>
    );

}