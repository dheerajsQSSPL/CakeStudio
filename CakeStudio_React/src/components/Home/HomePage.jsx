import HeroBanner from "../common/HeroBanner/HeroBanner";
import { HERO_BANNER } from "../../constants/heroBanner";
import { Box, Grid } from "@mui/material";
import CategoryCard from "../common/CategoryCard/CategoryCard";
import { categories } from "../../constants/categoryData"
import './homepage.css'
import SectionTitle from "../common/SectionTitle/SectionTitle";

const HomePage = () => {

    return (
        <>
            <HeroBanner banner={HERO_BANNER} />
            <SectionTitle
                title="Featured Categories"
            //subtitle="Discover delicious cakes for every celebration."
            />
            <Box className="categories-section">
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {categories.map((category) => (
                        <Grid
                            key={category.id}
                            size={{ xs: 12, sm: 6, md: 3 }}
                        >
                            <CategoryCard category={category} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <SectionTitle
                title="Popular Cakes"
                //subtitle="Our customers' favorite handcrafted cakes."
            />
        </>
    );
};

export default HomePage;