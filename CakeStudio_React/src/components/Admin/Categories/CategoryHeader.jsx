import {
    Box,
    Button,
    Typography
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import "./CategoryHeader.css";

export default function CategoryHeader({

    onAdd

}) {

    return (

        <Box className="category-header">

            <Box>

                <Typography className="category-title">

                    Categories

                </Typography>

                <Typography className="category-subtitle">

                    Organize your cakes into categories for a better shopping experience.

                </Typography>

            </Box>

            <Button

                variant="contained"

                startIcon={<AddOutlinedIcon />}

                className="add-category-btn"

                onClick={onAdd}

            >

                Add Category

            </Button>

        </Box>

    );

}