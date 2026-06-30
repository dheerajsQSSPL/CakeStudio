import {
    Box,
    Button,
    Typography
} from "@mui/material";

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import "./EmptyCategories.css";

export default function EmptyCategories({

    onAdd

}) {

    return (

        <Box className="empty-categories">

            <Box className="empty-category-icon">

                <CategoryOutlinedIcon />

            </Box>

            <Typography className="empty-category-title">

                No Categories Found

            </Typography>

            <Typography className="empty-category-subtitle">

                You haven't created any categories yet.
                Add your first category to organize your cakes.

            </Typography>

            <Button

                variant="contained"

                startIcon={<AddOutlinedIcon />}

                className="empty-category-btn"

                onClick={onAdd}

            >

                Add First Category

            </Button>

        </Box>

    );

}