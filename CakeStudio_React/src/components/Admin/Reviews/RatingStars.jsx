import {
    Box,
    Rating,
    Typography
} from "@mui/material";

import "./RatingStars.css";

export default function RatingStars({

    rating

}) {

    return (

        <Box className="rating-stars">

            <Rating

                value={rating}

                precision={1}

                readOnly

                size="small"

            />

            <Typography className="rating-value">

                ({rating})

            </Typography>

        </Box>

    );

}