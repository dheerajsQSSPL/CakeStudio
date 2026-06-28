import { Box } from "@mui/material";

import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import OccasionGrid from "../common/Occasion/OccasionGrid";

import { occasionData } from "../../constants/occasionData";

export default function OccasionsComponent() {

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
                    { label: "Occasions" }
                ]}
            />

            <SectionTitle
                title="All Occasions"
                subtitle="Find the perfect cake for every special moment."
            />

            <OccasionGrid
                occasions={occasionData}
            />

        </Box>

    );

}