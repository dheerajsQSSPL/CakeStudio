import { Box, Grid, Typography } from "@mui/material";

import "./StorySection.css";
import logo from "../../../assets/images/our_story.png"

const StorySection = () => {

    return (

        <Box className="story-section">

            <Grid
                container
                spacing={6}
                alignItems="center"
            >

                {/* Left Image */}

                <Grid size={{ xs: 12, md: 5 }}>

                    <Box
                        component="img"
                        src={logo}
                        alt="Our Story"
                        className="story-image"
                    />

                </Grid>

                {/* Right Content */}

                <Grid size={{ xs: 12, md: 7 }}>

                    <Typography className="story-title">

                        Our Story

                    </Typography>

                    <Typography className="story-description">

                        CakeStudio was born out of a simple idea —
                        to make every moment of life sweeter.
                        What started as a small home bakery has
                        now grown into a trusted brand loved by
                        thousands.

                    </Typography>

                    <Typography className="story-description">

                        We focus on quality, creativity and customer
                        happiness. Whether it's a birthday, wedding,
                        anniversary or just a small get-together,
                        we're here to make it special.

                    </Typography>

                </Grid>

            </Grid>

        </Box>

    );

};

export default StorySection;