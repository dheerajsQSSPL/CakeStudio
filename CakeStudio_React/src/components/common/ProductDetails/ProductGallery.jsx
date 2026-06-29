import { useState } from "react";

import {
    Box,
    IconButton
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import "./ProductGallery.css";

const ProductGallery = ({ images }) => {

    const [selectedImage, setSelectedImage] = useState(0);

    const previousImage = () => {

        setSelectedImage(prev =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );

    };

    const nextImage = () => {

        setSelectedImage(prev =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );

    };

    return (

        <Box className="gallery-container">

            {/* Main Image */}

            <Box className="gallery-main-image-wrapper">

                <Box
                    component="img"
                    src={images[selectedImage]}
                    alt="Cake"
                    className="gallery-main-image"
                />

                <IconButton className="wishlist-btn">

                    <FavoriteBorderOutlinedIcon />

                </IconButton>

            </Box>

            {/* Thumbnail Slider */}

            <Box className="gallery-thumbnail-wrapper">

                <IconButton
                    onClick={previousImage}
                >

                    <KeyboardArrowLeftOutlinedIcon />

                </IconButton>

                <Box className="gallery-thumbnails">

                    {images.map((image, index) => (

                        <Box

                            key={index}

                            component="img"

                            src={image}

                            alt={`thumb-${index}`}

                            onClick={() =>
                                setSelectedImage(index)
                            }

                            className={`gallery-thumbnail ${
                                selectedImage === index
                                    ? "active"
                                    : ""
                            }`}

                        />

                    ))}

                </Box>

                <IconButton
                    onClick={nextImage}
                >

                    <KeyboardArrowRightOutlinedIcon />

                </IconButton>

            </Box>

        </Box>

    );

};

export default ProductGallery;