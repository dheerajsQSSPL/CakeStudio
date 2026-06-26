import { Box, Typography } from "@mui/material";
import "./AuthBanner.css";

const AuthBanner = ({ banner }) => {
    return (
        <Box className="auth-banner">
            <Box
                component="img"
                src={banner.src}
                alt="Cake Banner"
                className="auth-banner-image"
            />

            <Box className="auth-banner-overlay">
                <Typography variant="h2" className="auth-banner-logo">
                    <Box component="span" className="cake-text">Cake</Box>
                    <Box component="span" className="studio-text">Studio</Box>
                </Typography>

                <Typography className="auth-banner-tagline">
                    {banner.tagline}
                </Typography>

                {banner.description && (
                    <Typography className="auth-banner-description">
                        {banner.description}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default AuthBanner;