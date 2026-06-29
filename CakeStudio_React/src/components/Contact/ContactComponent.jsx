import { Box, Grid } from "@mui/material";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import ContactHero from "../common/Contact/ContactHero";
import ContactInfo from "../common/Contact/ContactInfo";
import ContactForm from "../common/Contact/ContactForm";
import ContactMap from "../common/Contact/ContactMap";


export default function ContactComponent(props) {
    return (
        <>
            <Box
                sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    px: { xs: 2, md: 4 },
                    py: 3
                }}
            >

                <Breadcrumb
                    items={[
                        { label: "Home", path: "/" },
                        { label: "Contact Us" }
                    ]}
                />

                <ContactHero />

                <Grid container spacing={3} alignItems="stretch">

                    <Grid size={{ xs: 12, md: 7.5 }}>
                        <ContactForm />
                    </Grid>

                    <Grid size={{ xs: 12, md: 4.5 }}>
                        <ContactInfo />
                    </Grid>

                </Grid>

                <ContactMap />

            </Box>
        </>
    )
}