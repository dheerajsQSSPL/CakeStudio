import { Box } from "@mui/material";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import AboutHero from "../common/About/AboutHero";
import StorySection from "../common/About/StorySection";
import WhyChooseUs from "../common/About/WhyChooseUs";
import TeamSection from "../common/About/TeamSection";
import AboutCTA from "../common/About/AboutCTA";


export default function AboutComponent() {

    return (

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
                    { label: "About Us" }
                ]}
            />

            <AboutHero />
            <StorySection />
            <WhyChooseUs />
            <TeamSection />
            <AboutCTA />
        </Box>

    );

}