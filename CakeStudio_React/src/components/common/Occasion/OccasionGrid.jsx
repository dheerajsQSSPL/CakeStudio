import { Grid } from "@mui/material";
import OccasionCard from "./OccasionCard";

const OccasionGrid = ({ occasions }) => {

    return (

        <Grid
            container
            spacing={3}
        >

            {

                occasions.map(occasion => (

                    <Grid
                        key={occasion.id}
                        size={{
                            xs:12,
                            sm:6,
                            md:4,
                            lg:2
                        }}
                    >

                        <OccasionCard
                            occasion={occasion}
                        />

                    </Grid>

                ))

            }

        </Grid>

    );

};

export default OccasionGrid;