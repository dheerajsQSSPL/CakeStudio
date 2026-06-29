import { Box, Grid, Typography, Link } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { locationData } from "../../../constants/locationData";

import "./ContactMap.css";

const ContactMap = () => {

    return (

        <Box className="contact-map">

            <Grid
                container
                sx={{ height: "100%" }}
            >

                {/* Left */}

                <Grid
                    size={{ xs: 12, md: 3 }}
                >

                    <Box className="location-card">

                        <Typography className="location-title">

                            {locationData.title}

                        </Typography>

                        <Typography className="location-company">

                            {locationData.company}

                        </Typography>

                        <Typography className="location-address">

                            {locationData.address[0]}

                            <br />

                            {locationData.address[1]}

                        </Typography>

                        <Link

                            href="https://maps.google.com"

                            target="_blank"

                            underline="none"

                            className="location-link"

                        >

                            View on Google Maps →

                        </Link>

                    </Box>

                </Grid>

                {/* Right */}

                <Grid
                    size={{ xs: 12, md: 9 }}
                >

                    <iframe
                        className="contact-map-frame"
                        title="CakeStudio Location"
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps?q=${locationData.latitude},${locationData.longitude}&z=15&output=embed`}
                    />

                </Grid>
            </Grid>

        </Box>

    );

};

export default ContactMap;