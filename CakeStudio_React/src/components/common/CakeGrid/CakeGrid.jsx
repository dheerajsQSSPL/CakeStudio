import { Grid } from "@mui/material";
import CakeCard from "../CakeCard/CakeCard";
import "./CakeGrid.css";

const CakeGrid = ({
    cakes,
    view
}) => {

    return (

        <Grid
            container
            spacing={3}
            className="cake-grid"
        >

            {cakes.map((cake) => (

                <Grid
                    key={cake.id}
                    size={{
                        xs: 12,
                        sm: view === "grid" ? 6 : 12,
                        md: view === "grid" ? 4 : 12
                    }}
                >

                    <CakeCard
                        image={cake.image}
                        name={cake.name}
                        rating={cake.rating}
                        reviews={cake.reviews}
                        price={cake.price}
                        favourite={cake.favourite}
                        width="100%"
                        imageHeight={220}
                    />

                </Grid>

            ))}

        </Grid>

    );

};

export default CakeGrid;