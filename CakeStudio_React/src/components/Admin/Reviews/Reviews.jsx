import { Box } from "@mui/material";
import { useState } from "react";

import ReviewsHeader from "./ReviewsHeader";
import ReviewsFilters from "./ReviewsFilters";
import ReviewsTabs from "./ReviewsTabs";
import ReviewsTable from "./ReviewsTable";
import EmptyReviews from "./EmptyReviews";
import ReviewDetailsDialog from "./ReviewDetailsDialog";
import ReplyReviewDialog from "./ReplyReviewDialog";

import "./Reviews.css";

export default function Reviews() {

    const [reviews] = useState([

        {
            id: 1,
            customer: "Rahul Sharma",
            email: "rahul@gmail.com",
            mobile: "+91 9876543210",
            type: "Review",
            orderId: "#1001",
            rating: 5,
            message: "Amazing cake! Very fresh and delicious.",
            status: "Published",
            date: "25 May 2026"
        },

        {
            id: 2,
            customer: "Priya Verma",
            email: "priya@gmail.com",
            mobile: "+91 9123456789",
            type: "Complaint",
            orderId: "#1002",
            rating: 1,
            message: "Cake arrived damaged.",
            status: "New",
            date: "24 May 2026"
        },

        {
            id: 3,
            customer: "Amit Patel",
            email: "amit@gmail.com",
            mobile: "+91 9988776655",
            type: "Review",
            orderId: "#1003",
            rating: 4,
            message: "Very good quality.",
            status: "Published",
            date: "23 May 2026"
        }

    ]);

    const [search, setSearch] = useState("");

    const [type, setType] = useState("All");

    const [status, setStatus] = useState("All");

    const [tab, setTab] = useState("All");

    const [selectedReview, setSelectedReview] = useState(null);

    const [openDetails, setOpenDetails] = useState(false);

    const [openReply, setOpenReply] = useState(false);

    const filteredReviews = reviews.filter(review => {

        const matchesSearch =

            review.customer.toLowerCase().includes(search.toLowerCase()) ||

            review.email.toLowerCase().includes(search.toLowerCase()) ||

            review.orderId.toLowerCase().includes(search.toLowerCase());

        const matchesType =

            type === "All" ||

            review.type === type;

        const matchesStatus =

            status === "All" ||

            review.status === status;

        const matchesTab =

            tab === "All" ||

            review.type === tab;

        return (

            matchesSearch &&

            matchesType &&

            matchesStatus &&

            matchesTab

        );

    });

    return (

        <Box className="reviews-page">

            <ReviewsHeader />

            <ReviewsFilters

                search={search}
                setSearch={setSearch}

                type={type}
                setType={setType}

                status={status}
                setStatus={setStatus}

            />

            <ReviewsTabs

                tab={tab}

                setTab={setTab}

                reviews={reviews}

            />

            {

                filteredReviews.length === 0 ?

                    <EmptyReviews />

                    :

                    <ReviewsTable

                        reviews={filteredReviews}

                        onView={(review) => {

                            setSelectedReview(review);

                            setOpenDetails(true);

                        }}

                        onReply={(review) => {

                            setSelectedReview(review);

                            setOpenReply(true);

                        }}

                    />

            }

            <ReviewDetailsDialog

                open={openDetails}

                review={selectedReview}

                onClose={() =>

                    setOpenDetails(false)

                }

            />

            <ReplyReviewDialog

                open={openReply}

                review={selectedReview}

                onClose={() =>

                    setOpenReply(false)

                }

            />

        </Box>

    );

}