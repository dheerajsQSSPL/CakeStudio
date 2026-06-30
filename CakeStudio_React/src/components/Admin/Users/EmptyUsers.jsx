import {
    Box,
    Typography
} from "@mui/material";

import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import "./EmptyUsers.css";

export default function EmptyUsers() {

    return (

        <Box className="empty-users">

            <Box className="empty-users-icon">

                <PeopleOutlineOutlinedIcon />

            </Box>

            <Typography className="empty-users-title">

                No Users Found

            </Typography>

            <Typography className="empty-users-subtitle">

                No registered customers match your current search or filter.

            </Typography>

        </Box>

    );

}