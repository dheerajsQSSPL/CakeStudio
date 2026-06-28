import { Box, Container, Grid } from "@mui/material";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";

import "./Footer.css";

const Footer = () => {

    return (

        <Box className="footer">

            <Container maxWidth="xl">

                <Grid container spacing={5}>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <FooterBrand />
                    </Grid>

                    <Grid size={{ xs: 12, md: 2 }}>
                        <FooterLinks section="Shop" />
                    </Grid>

                    <Grid size={{ xs: 12, md: 2 }}>
                        <FooterLinks section="Information" />
                    </Grid>

                    <Grid size={{ xs: 12, md: 2 }}>
                        <FooterLinks section="Customer Service" />
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Newsletter />
                    </Grid>

                </Grid>

            </Container>

            <Box className="footer-bottom">
                © 2026 CakeStudio. All Rights Reserved.
            </Box>

        </Box>

    );

};

export default Footer;