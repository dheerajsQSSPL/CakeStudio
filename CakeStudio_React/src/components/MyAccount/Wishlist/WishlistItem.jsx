import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    IconButton,
    Rating,
    Typography
} from "@mui/material";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./WishlistItem.css";

export default function WishlistItem({

    item,

    onRemove,

    onAddToCart

}) {

    return (

        <Card className="wishlist-item">

            <CardContent>

                <Box className="wishlist-row">

                    <img

                        src={item.image}

                        alt={item.name}

                        className="wishlist-image"

                    />

                    <Box className="wishlist-info">

                        <Typography className="wishlist-name">

                            {item.name}

                        </Typography>

                        <Box className="wishlist-rating">

                            <Rating

                                value={item.rating}

                                precision={0.5}

                                readOnly

                                size="small"

                            />

                            <Typography className="review-count">

                                ({item.reviews} Reviews)

                            </Typography>

                        </Box>

                        <Typography className="wishlist-description">

                            {item.description}

                        </Typography>

                        <Chip

                            label={item.weight}

                            size="small"

                            className="weight-chip"

                        />

                    </Box>

                    <Box className="wishlist-right">

                        <Typography className="wishlist-price">

                            ₹{item.price}

                        </Typography>

                        <Typography

                            className={

                                item.inStock

                                    ? "stock in-stock"

                                    : "stock out-stock"

                            }

                        >

                            {

                                item.inStock

                                    ? "In Stock"

                                    : "Out of Stock"

                            }

                        </Typography>

                        <Box className="wishlist-actions">

                            <IconButton

                                className="delete-btn"

                                onClick={() => onRemove?.(item.id)}

                            >

                                <DeleteOutlineOutlinedIcon />

                            </IconButton>

                            <Button

                                variant="contained"

                                startIcon={<ShoppingCartOutlinedIcon />}

                                className="cart-btn"

                                disabled={!item.inStock}

                                onClick={() => onAddToCart?.(item)}

                            >

                                Add To Cart

                            </Button>

                        </Box>

                    </Box>

                </Box>

            </CardContent>

        </Card>

    );

}