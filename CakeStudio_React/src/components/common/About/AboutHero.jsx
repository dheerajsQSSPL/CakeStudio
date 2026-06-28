import { Box, Grid, Typography } from "@mui/material";

import PrimaryButton from "../CustomFields/PrimaryButton/PrimaryButton";

import "./AboutHero.css";
import logo from "../../../assets/images/about_us_banner.png"

const AboutHero = () => {

    return (

        <Box className="about-hero">

            <Grid
                container
                spacing={6}
                alignItems="center"
            >

                {/* Left Content */}

                <Grid size={{ xs: 12, md: 5 }}>

                    <Typography className="about-label">

                        ABOUT CAKESTUDIO

                    </Typography>

                    <Typography className="about-title">

                        Crafting Moments,
                        <br />
                        Creating Memories

                    </Typography>

                    <Typography className="about-description">

                        At CakeStudio, we believe every celebration deserves a
                        perfect cake. From the finest ingredients to the most
                        delicate designs, we bake happiness into every bite.

                    </Typography>

                    <PrimaryButton>

                        Our Story

                    </PrimaryButton>

                </Grid>

                {/* Right Image */}

                <Grid size={{ xs: 12, md: 7 }}>

                    <Box
                        component="img"
                        src={logo}
                        alt="About CakeStudio"
                        className="about-hero-image"
                    />

                </Grid>

            </Grid>

        </Box>

    );

};

export default AboutHero;