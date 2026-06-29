import { Box, Grid, Typography } from "@mui/material";

import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import img from "../../../assets/images/contact_cake.png"
import "./ContactHero.css";

const ContactHero = () => {

    return (

        <Box className="contact-hero">

            <Grid
                container
                spacing={5}
                alignitems="center"
            >

                {/* Left */}

                <Grid size={{ xs: 12, md: 5 }}>

                    <Typography className="contact-label">

                        GET IN TOUCH

                    </Typography>

                    <Typography className="contact-title">

                        We'd Love to
                        <br />
                        Hear from You!

                    </Typography>

                    <Typography className="contact-description">

                        Have a question, need help with an order, or want to
                        create something special? We're here to help.

                    </Typography>

                    <Box className="contact-features">

                        <Box className="contact-feature">

                            <Box className="contact-icon-circle">

                                <SupportAgentOutlinedIcon className="contact-icon" />

                            </Box>

                            <Box>

                                <Typography className="feature-title">

                                    Quick Support

                                </Typography>

                                <Typography className="feature-subtitle">

                                    Fast response

                                </Typography>

                            </Box>

                        </Box>

                        <Box className="contact-feature">

                            <Box className="contact-icon-circle">

                                <BoltOutlinedIcon className="contact-icon" />

                            </Box>

                            <Box>

                                <Typography className="feature-title">

                                    Fast Response

                                </Typography>

                                <Typography className="feature-subtitle">

                                    Within hours

                                </Typography>

                            </Box>

                        </Box>

                        <Box className="contact-feature">

                            <Box className="contact-icon-circle">

                                <FavoriteBorderOutlinedIcon className="contact-icon" />

                            </Box>

                            <Box>

                                <Typography className="feature-title">

                                    Customer First

                                </Typography>

                                <Typography className="feature-subtitle">

                                    Your priority

                                </Typography>

                            </Box>

                        </Box>

                    </Box>

                </Grid>

                {/* Right */}

                <Grid size={{ xs: 12, md: 7 }}>

                    <Box

                        component="img"

                        src={img}

                        alt="Contact Cake"

                        className="contact-hero-image"

                    />

                </Grid>

            </Grid>

        </Box>

    );

};

export default ContactHero;