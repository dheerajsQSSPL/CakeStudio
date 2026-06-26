import { Box, Divider, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./SectionTitle.css";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <Box className="section-title">
      <Typography className="section-title-text">
        {title}
      </Typography>

      <Box className="section-divider">
        <Divider className="divider-line" />

        <FavoriteIcon className="divider-heart" />

        <Divider className="divider-line" />
      </Box>

      {subtitle && (
        <Typography className="section-title-subtitle">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;