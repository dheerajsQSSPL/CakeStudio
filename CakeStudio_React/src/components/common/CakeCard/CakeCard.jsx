import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Rating,
    Typography
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./CakeCard.css";

const CakeCard = ({
    image,
    name,
    rating,
    reviews,
    price,
    favourite = false
}) => {
    return (

        <Card className="cake-card">

            <Box className="cake-image-container">

                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    className="cake-image"
                />

                <IconButton className="favorite-btn">

                    <FavoriteBorderOutlinedIcon />

                </IconButton>

            </Box>

            <CardContent>

                <Typography className="cake-name">
                    {name}
                </Typography>

                <Box className="rating-container">

                    <Rating
                        value={rating}
                        precision={0.5}
                        readOnly
                        size="small"
                    />

                    <Typography className="review-count">
                        ({reviews})
                    </Typography>

                </Box>

                <Typography className="cake-price">
                    ₹{price}
                </Typography>

                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    className="add-cart-btn"
                >
                    Add to Cart
                </Button>

            </CardContent>

        </Card>

    );

};

export default CakeCard;