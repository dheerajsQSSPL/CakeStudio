import { useState } from "react";

import {
    Box,
    Divider,
    Rating,
    Typography
} from "@mui/material";

import ProductSpecifications from "./ProductSpecifications";
import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";

import "./ProductInfo.css";

const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1);

    return (

        <Box className="product-info">

            <Typography className="product-title">
                {product.name}
            </Typography>

            <Typography className="product-price">
                ₹{product.price}
            </Typography>

            <Box className="product-rating">

                <Rating
                    value={product.rating}
                    precision={0.5}
                    readOnly
                />

                <Typography className="review-count">
                    ({product.reviewCount} Reviews)
                </Typography>

            </Box>

            <Typography className="product-heading">
                Description
            </Typography>

            <Typography className="product-description">
                {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <ProductSpecifications
                product={product}
            />

            <Divider sx={{ my: 3 }} />

            <QuantitySelector
                value={quantity}
                onChange={setQuantity}
            />

            <ProductActions
                product={product}
                quantity={quantity}
            />

        </Box>

    );

};

export default ProductInfo;