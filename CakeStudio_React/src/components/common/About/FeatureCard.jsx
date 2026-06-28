import { Box, Typography } from "@mui/material";

import "./FeatureCard.css";

const FeatureCard = ({ feature }) => {

    const Icon = feature.icon;

    return (

        <Box className="feature-item">

            <Box className="feature-icon-circle">

                <Icon className="feature-icon" />

            </Box>

            <Box className="feature-content">

                <Typography className="feature-title">

                    {feature.title}

                </Typography>

                <Typography className="feature-description">

                    {feature.description}

                </Typography>

            </Box>

        </Box>

    );

};

export default FeatureCard;