import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Divider,
    Grid,
    Typography
} from "@mui/material";

import RatingStars from "./RatingStars";
import ReviewStatusChip from "./ReviewStatusChip";
import ReviewTypeChip from "./ReviewTypeChip";

import "./ReviewDetailsDialog.css";

export default function ReviewDetailsDialog({

    open,

    review,

    onClose

}) {

    if (!review) return null;

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="md"

        >

            <DialogTitle>

                Review Details

            </DialogTitle>

            <DialogContent>

                <Grid

                    container

                    spacing={3}

                >

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Customer

                            </Typography>

                            <Typography className="info-value">

                                {review.customer}

                            </Typography>

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Email

                            </Typography>

                            <Typography className="info-value">

                                {review.email}

                            </Typography>

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Mobile

                            </Typography>

                            <Typography className="info-value">

                                {review.mobile}

                            </Typography>

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Order ID

                            </Typography>

                            <Typography className="info-value">

                                {review.orderId}

                            </Typography>

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Type

                            </Typography>

                            <ReviewTypeChip

                                type={review.type}

                            />

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Status

                            </Typography>

                            <ReviewStatusChip

                                status={review.status}

                            />

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Rating

                            </Typography>

                            <RatingStars

                                rating={review.rating}

                            />

                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box className="review-info">

                            <Typography className="info-label">

                                Submitted On

                            </Typography>

                            <Typography className="info-value">

                                {review.date}

                            </Typography>

                        </Box>

                    </Grid>

                </Grid>

                <Divider sx={{ my: 3 }} />

                <Typography className="info-label">

                    Customer Message

                </Typography>

                <Typography className="review-message-full">

                    {review.message}

                </Typography>

            </DialogContent>

            <DialogActions>

                <Button

                    variant="contained"

                    className="close-review-btn"

                    onClick={onClose}

                >

                    Close

                </Button>

            </DialogActions>

        </Dialog>

    );

}