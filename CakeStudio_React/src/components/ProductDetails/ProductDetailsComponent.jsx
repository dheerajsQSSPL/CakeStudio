import { Grid,Box } from "@mui/material";
import ProductGallery from "../common/ProductDetails/ProductGallery";
import ProductInfo from "../common/ProductDetails/ProductInfo";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb"
import "./ProductDetailsComponent.css"
const product = {

    id: 1,

    name: "Chocolate Truffle Cake",

    price: 899,

    rating: 5,

    reviewCount: 124,

    description:
        "Indulge in the rich chocolate flavour made with premium cocoa, layered sponge, silky truffle, and smooth chocolate ganache.",

    flavour: "Chocolate Truffle",

    weight: "0.5 kg, 1 kg, 2 kg",

    delivery: "Same Day / Next Day",

    images: [

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9lDXMeBjOCReXjWZwt0lTlWXnVKMkUOjHVU39--4EQ&s=10",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYqPfD5XWZdTZ8X0S7LlR6GYMah_99qjkVpG2w7NzCw&s=10",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxF4FfTH0GaOIYf7rRX34GT7lRSAHch80XX8ydO5Prg&s=10",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZZVZHZvJTKwkC5gzWQ9ONR5DaymMXrh1e-8LxIQ90A&s=10",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduunHF0Fu2P7PLGyTwUlXPeuIddVtvVrk-_-w8ktiXw&s=10"

    ]

};

export default function ProductDetailsComponent() {

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
                    { label: "Cakes", path: "/cakes" },
                    { label: product.name }
                ]}
            />

            <Box className="product-details-container">

                <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                >

                    {/* Left */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 6
                        }}
                    >

                        <ProductGallery
                            images={product.images}
                        />

                    </Grid>

                    {/* Right */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 6
                        }}
                    >

                        <ProductInfo
                            product={product}
                        />

                    </Grid>

                </Grid>

            </Box>

        </Box>

    );

}