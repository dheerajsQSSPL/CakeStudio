import HeroBanner from "../common/HeroBanner/HeroBanner";
import { HERO_BANNER } from "../../constants/heroBanner";
import { Box, Grid } from "@mui/material";
import CategoryCard from "../common/CategoryCard/CategoryCard";
import { categories } from "../../constants/categoryData"
import './homepage.css'
import SectionTitle from "../common/SectionTitle/SectionTitle";
import CakeCard from "../common/CakeCard/CakeCard";
import { cakes } from "../../constants/cakeData"
import { features } from "../../constants/featureData";
import FeatureCard from "../common/FeatureCard/FeatureCard";

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
                    justifycontent="center"
                    alignitems="stretch"
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
            <Grid
                container
                spacing={6}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                {cakes.map((cake) => (

                    <Grid key={cake.id}>

                        <CakeCard
                            image={cake.image}
                            name={cake.name}
                            rating={cake.rating}
                            reviews={cake.reviews}
                            price={cake.price}
                            favourite={cake.favourite}
                        />

                    </Grid>

                ))}

            </Grid>
            <Box
                sx={{
                    // maxWidth: "1400px",
                    // width:"100%",
                    mx: "auto",
                    paddingTop:5
                }}
            >
                <Box className="feature-section">

                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        {features.map((feature) => (

                            <Grid
                                key={feature.id}
                                size={{ xs: 12, md: 3 }}
                            >
                                <FeatureCard feature={feature} />
                            </Grid>

                        ))}

                    </Grid>

                </Box>
            </Box>
        </>
    );
};

export default HomePage;