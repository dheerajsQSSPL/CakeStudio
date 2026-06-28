import { Box, Grid } from "@mui/material";

import SectionTitle from "../SectionTitle/SectionTitle";
import TeamCard from "./TeamCard";

import { teamData } from "../../../constants/teamData";

import "./TeamSection.css";

const TeamSection = () => {

    return (

        <Box className="team-section">

            <SectionTitle
                title="Meet Our Team"
                subtitle="The passionate people behind every delicious creation."
            />

            <Grid
                container
                spacing={3}
            >

                {teamData.map((member)=>(

                    <Grid
                        key={member.id}
                        size={{
                            xs:12,
                            sm:6,
                            md:3
                        }}
                    >

                        <TeamCard
                            member={member}
                        />

                    </Grid>

                ))}

            </Grid>

        </Box>

    );

};

export default TeamSection;