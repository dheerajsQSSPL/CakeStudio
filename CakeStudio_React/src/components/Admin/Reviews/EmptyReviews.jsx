import {
    Box,
    Typography
} from "@mui/material";

import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";

import "./EmptyReviews.css";

export default function EmptyReviews() {

    return (

        <Box className="empty-reviews">

            <Box className="empty-reviews-icon">

                <ReviewsOutlinedIcon />

            </Box>

            <Typography className="empty-reviews-title">

                No Reviews or Complaints Found

            </Typography>

            <Typography className="empty-reviews-subtitle">

                There are no customer reviews or complaints matching your current filters.

            </Typography>

        </Box>

    );

}