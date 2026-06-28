import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Link,
    Box
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const navigate = useNavigate()
    return (

        <Card className="category-card">

            <CardMedia
                component="img"
                image={category.image}
                alt={category.name}
                className="category-image"
            />

            <CardContent className="category-content">

                <Typography
                    className="category-title"
                >
                    {category.name}
                </Typography>

                <Box className="category-link-container">

                    <Link
                        underline="none"
                        className="category-link"
                        onClick={() =>
                            navigate(`/cakes?category=${encodeURIComponent(category.name)}`)
                        }
                    >
                        Explore Cakes
                    </Link>

                    <ArrowForwardIosIcon
                        className="category-arrow"
                    />

                </Box>

            </CardContent>

        </Card>

    );

};

export default CategoryCard;