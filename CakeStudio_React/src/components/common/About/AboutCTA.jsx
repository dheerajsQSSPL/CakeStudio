import { Box, Grid, Typography } from "@mui/material";

import PrimaryButton from "../CustomFields/PrimaryButton/PrimaryButton";

import "./AboutCTA.css";

import img1 from "../../../assets/images/about_2.png"
import img2 from "../../../assets/images/cak.png"

const AboutCTA = () => {

    return (

        <Box className="about-cta">

            <Grid
                container
                alignItems="center"
            >

                {/* Left Cake */}

                <Grid size={{ xs: 12, md: 3 }}>

                    <Box
                        component="img"
                        src={img1}
                        alt="Cake"
                        className="cta-cake"
                    />

                </Grid>

                {/* Content */}

                <Grid size={{ xs: 12, md: 6 }}>

                    <Typography className="cta-title">

                        Let's Make Your Next Celebration Special!

                    </Typography>

                    <Typography className="cta-description">

                        Fresh custom cakes for every occasion,
                        baked with love and delivered to your doorstep.

                    </Typography>

                    <PrimaryButton>

                        Order Now

                    </PrimaryButton>

                </Grid>

                {/* Right Illustration */}

                <Grid
                    size={{ xs: 12, md: 3 }}
                    className="cta-right"
                >

                    <Box
                        component="img"
                        src={img2}
                        alt="Cake Illustration"
                        className="cta-outline"
                    />

                </Grid>

            </Grid>

        </Box>

    );

};

export default AboutCTA;