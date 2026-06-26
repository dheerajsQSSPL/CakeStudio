import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./AuthHeader.css";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <Box className="auth-header">
      <Box className="auth-title-container">
        <Typography variant="h4" className="auth-title">
          {title}
        </Typography>

        <FavoriteIcon className="auth-title-icon" />
      </Box>

      <Typography variant="body1" className="auth-subtitle">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default AuthHeader;