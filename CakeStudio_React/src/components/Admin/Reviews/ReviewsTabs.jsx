import {
    Box,
    Tab,
    Tabs
} from "@mui/material";

import "./ReviewsTabs.css";

export default function ReviewsTabs({

    tab,

    setTab,

    reviews

}) {

    const reviewCount = reviews.filter(

        review => review.type === "Review"

    ).length;

    const complaintCount = reviews.filter(

        review => review.type === "Complaint"

    ).length;

    return (

        <Box className="reviews-tabs">

            <Tabs

                value={tab}

                onChange={(event, value) =>

                    setTab(value)

                }

                textColor="inherit"

                indicatorColor="primary"

            >

                <Tab

                    label={`All (${reviews.length})`}

                    value="All"

                />

                <Tab

                    label={`Reviews (${reviewCount})`}

                    value="Review"

                />

                <Tab

                    label={`Complaints (${complaintCount})`}

                    value="Complaint"

                />

            </Tabs>

        </Box>

    );

}