import {
    Box,
    Button,
    Typography
} from "@mui/material";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "./ImagePreview.css";

export default function ImagePreview({

    image,

    onRemove

}) {

    const imageUrl = URL.createObjectURL(image);

    return (

        <Box className="image-preview">

            <img

                src={imageUrl}

                alt="Cake Preview"

                className="preview-image"

            />

            <Box className="preview-details">

                <Typography className="preview-title">

                    {image.name}

                </Typography>

                <Typography className="preview-size">

                    {(image.size / 1024).toFixed(1)} KB

                </Typography>

            </Box>

            <Button

                variant="outlined"

                color="error"

                startIcon={<DeleteOutlineOutlinedIcon />}

                className="remove-image-btn"

                onClick={onRemove}

            >

                Remove

            </Button>

        </Box>

    );

}