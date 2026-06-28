import { Box, Card, CardMedia, Typography, Link } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

import "./CategoryCardLarge.css";

const CategoryCardLarge = ({ category }) => {

    const navigate = useNavigate();

    return (

        <Card className="category-large-card">

            <CardMedia
                component="img"
                image={category.image}
                alt={category.title}
                className="category-large-image"
            />

            <Box className="category-large-content">

                <Box className="category-large-icon-wrapper">

                    <Box
                        component="img"
                        src={category.icon}
                        alt={category.title}
                        className="category-large-icon"
                    />

                </Box>

                <Typography className="category-large-title">

                    {category.title}

                </Typography>

                <Typography className="category-large-description">

                    {category.description}

                </Typography>

                <Link
                    underline="none"
                    className="category-large-link"
                    onClick={() =>
                        navigate(`/cakes?category=${category.slug}`)
                    }
                >

                    Explore Cakes

                    <ArrowRightAltIcon
                        className="category-large-arrow"
                    />

                </Link>

            </Box>

        </Card>

    );

};

export default CategoryCardLarge;