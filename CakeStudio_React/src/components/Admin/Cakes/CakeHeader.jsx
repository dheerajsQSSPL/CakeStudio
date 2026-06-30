import {
    Box,
    Button,
    Typography
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { useNavigate } from "react-router-dom";

import "./CakeHeader.css";

export default function CakeHeader() {

    const navigate = useNavigate();

    return (

        <Box className="cake-header">

            <Box>

                <Typography className="cake-title">

                    Cakes

                </Typography>

                <Typography className="cake-subtitle">

                    Manage all cakes available in your CakeStudio store.

                </Typography>

            </Box>

            <Button

                variant="contained"

                startIcon={<AddOutlinedIcon />}

                className="add-cake-btn"

                onClick={() => navigate("/admin/cakes/add")}

            >

                Add Cake

            </Button>

        </Box>

    );

}