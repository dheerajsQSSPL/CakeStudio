import {
    Box,
    Typography
} from "@mui/material";

import "./UserHeader.css";

export default function UserHeader() {

    return (

        <Box className="user-header">

            <Box>

                <Typography className="user-title">

                    Users

                </Typography>

                <Typography className="user-subtitle">

                    Manage registered customers, control account access and monitor user activity.

                </Typography>

            </Box>

        </Box>

    );

}