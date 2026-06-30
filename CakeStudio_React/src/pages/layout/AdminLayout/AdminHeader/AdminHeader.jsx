import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { useState } from "react";

import "./AdminHeader.css";
import { useNavigate } from "react-router-dom";
import LogoutDialog from "../../../../components/Admin/common/LogoutDialog/LogoutDialog";

export default function AdminHeader({

    onMenuClick,

    pageTitle = "Dashboard"

}) {
    const [openLogout, setOpenLogout] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {

        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {

        setAnchorEl(null);

    };

    return (

        <AppBar

            position="sticky"

            elevation={0}

            className="admin-header"

        >

            <Toolbar>

                <IconButton

                    onClick={onMenuClick}

                >

                    <MenuOutlinedIcon />

                </IconButton>

                <Typography className="admin-page-title">

                    {pageTitle}

                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <IconButton>

                    <NotificationsNoneOutlinedIcon />

                </IconButton>

                <Box

                    className="admin-profile"

                    onClick={handleOpen}

                >

                    <Avatar

                        className="admin-avatar"

                    >

                        A

                    </Avatar>

                    <Box>

                        <Typography className="admin-name">

                            Admin

                        </Typography>

                        <Typography className="admin-email">

                            admin@cakestudio.com

                        </Typography>

                    </Box>

                    <KeyboardArrowDownOutlinedIcon />

                </Box>

                <Menu

                    anchorEl={anchorEl}

                    open={open}

                    onClose={handleClose}

                >

                    <MenuItem

                        onClick={() => {

                            handleClose();

                            navigate("/admin/profile");

                        }}

                    >

                        Profile

                    </MenuItem>

                    <MenuItem

                        onClick={() => {

                            handleClose();

                            setOpenLogout(true);

                        }}

                    >

                        Logout

                    </MenuItem>

                </Menu>

            </Toolbar>
            <LogoutDialog

                open={openLogout}

                onClose={() => setOpenLogout(false)}

                onConfirm={() => {

                    setOpenLogout(false);

                    console.log("Logout");

                    // navigate("/login");

                }}

            />

        </AppBar>

    );

}