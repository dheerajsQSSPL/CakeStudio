import {
    Box,
    Typography
} from "@mui/material";

import "./ReviewsHeader.css";

export default function ReviewsHeader() {

    return (

        <Box className="reviews-header">

            <Box>

                <Typography className="reviews-title">

                    Complaints / Reviews

                </Typography>

                <Typography className="reviews-subtitle">

                    View and manage customer reviews and complaints.

                </Typography>

            </Box>

        </Box>

    );

}