import { Box, Grid } from "@mui/material";
import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import CategoryCardLarge from "../common/Categories/CategoryCardLarge";
import { categoryData } from "./categoryData";

export default function CategoriesComponent() {
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
                    { label: "Categories" }
                ]}
            />

            <SectionTitle
                title="Featured Categories"
                subtitle="Discover delicious cakes for every celebration."
            />

            <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="stretch"
                sx={{ mb: 4 }}
            >
                {categoryData.map((category) => (
                    <Grid
                        key={category.id}
                        size={{ xs: 12, sm: 6, md: 3 }}
                    >
                        <CategoryCardLarge category={category} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}