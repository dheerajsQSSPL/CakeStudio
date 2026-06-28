import { Box, Grid } from "@mui/material";


import FeatureCard from "./FeatureCard";

import { aboutusFeatureData } from "../../../constants/aboutusFeatureData";

import "./WhyChooseUs.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Margin } from "@mui/icons-material";

const WhyChooseUs = () => {

    return (

        <Box className="why-section">
            <Box sx={{ marginTop: "0px" }}>
                <SectionTitle
                    title="What Makes Us Special"
                    subtitle="Everything we do is crafted with passion, quality, and care."
                />
            </Box>
            <Grid
                container
                spacing={5}
            >

                {aboutusFeatureData.map(feature => (

                    <Grid
                        key={feature.id}
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 4
                        }}
                    >

                        <FeatureCard feature={feature} />

                    </Grid>

                ))}

            </Grid>

        </Box>

    );

};

export default WhyChooseUs;