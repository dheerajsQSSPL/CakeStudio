import { Box } from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

import PrimaryButton from "../CustomFields/PrimaryButton/PrimaryButton";

import "./ProductActions.css";
import useCart from "../../../hooks/useCart";

const ProductActions = ({ product, quantity }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product.id, quantity);
    };

    const handleWishlist = () => {

        console.log("Wishlist", product.id);

    };

    const handleBuyNow = () => {

        addToCart(product.id, quantity);

        navigate("/cart");

    };

    return (

        <Box className="product-actions">

            <PrimaryButton

                startIcon={<ShoppingCartOutlinedIcon />}

                onClick={handleAddToCart}

            >

                Add to Cart

            </PrimaryButton>

            <PrimaryButton

                variant="outlined"

                startIcon={<FavoriteBorderOutlinedIcon />}

                onClick={handleWishlist}

                className="wishlist-button"

            >

                Wishlist

            </PrimaryButton>

            <PrimaryButton

                startIcon={<FlashOnOutlinedIcon />}

                onClick={handleBuyNow}

                className="buy-now-button"

            >

                Buy Now

            </PrimaryButton>

        </Box>

    );

};

export default ProductActions;