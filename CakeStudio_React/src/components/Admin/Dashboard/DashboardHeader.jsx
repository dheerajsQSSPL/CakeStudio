import {
    Box,
    Button,
    Typography
} from "@mui/material";

import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import "./DashboardHeader.css";

export default function DashboardHeader() {

    const today = new Date().toLocaleDateString("en-IN", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    });

    return (

        <Box className="dashboard-header">

            <Box>

                <Typography className="dashboard-title">

                    Dashboard

                </Typography>

                <Typography className="dashboard-subtitle">

                    Welcome back, Admin 👋 Here's what's happening today.

                </Typography>

                <Typography className="dashboard-date">

                    {today}

                </Typography>

            </Box>

            <Button

                variant="contained"

                startIcon={<RefreshOutlinedIcon />}

                className="refresh-btn"

                onClick={() => console.log("Refresh Dashboard")}

            >

                Refresh

            </Button>

        </Box>

    );

}