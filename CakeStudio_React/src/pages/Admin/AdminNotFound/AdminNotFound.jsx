import {
    Box,
    Button,
    Typography
} from "@mui/material";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { useNavigate } from "react-router-dom";

import "./AdminNotFound.css";

export default function AdminNotFound() {

    const navigate = useNavigate();

    return (

        <Box className="admin-not-found">

            <Box className="admin-not-found-card">

                <ErrorOutlineOutlinedIcon

                    className="admin-not-found-icon"

                />

                <Typography className="admin-error-code">

                    404

                </Typography>

                <Typography className="admin-error-title">

                    Page Not Found

                </Typography>

                <Typography className="admin-error-description">

                    The page you're looking for doesn't exist or may have been moved.

                </Typography>

                <Button

                    variant="contained"

                    className="admin-home-btn"

                    onClick={() =>

                        navigate("/admin/dashboard")

                    }

                >

                    Back to Dashboard

                </Button>

            </Box>

        </Box>

    );

}