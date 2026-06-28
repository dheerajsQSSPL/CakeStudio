import { Box, Typography } from "@mui/material";
import "./FeatureCard.css";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <Box className="feature-card">
      <Box className="feature-icon">
        <Icon fontSize="medium" />
      </Box>

      <Box className="feature-details">
        <Typography className="feature-title">
          {feature.title}
        </Typography>

        <Typography className="feature-description">
          {feature.subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;