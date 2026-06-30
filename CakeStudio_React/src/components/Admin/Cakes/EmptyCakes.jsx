import {
    Box,
    Button,
    Typography
} from "@mui/material";

import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { useNavigate } from "react-router-dom";

import "./EmptyCakes.css";

export default function EmptyCakes() {

    const navigate = useNavigate();

    return (

        <Box className="empty-cakes">

            <Box className="empty-icon">

                <CakeOutlinedIcon />

            </Box>

            <Typography className="empty-title">

                No Cakes Found

            </Typography>

            <Typography className="empty-subtitle">

                You haven't added any cakes yet. Start by creating your first delicious cake.

            </Typography>

            <Button

                variant="contained"

                startIcon={<AddOutlinedIcon />}

                className="empty-btn"

                onClick={() => navigate("/admin/cakes/add")}

            >

                Add First Cake

            </Button>

        </Box>

    );

}