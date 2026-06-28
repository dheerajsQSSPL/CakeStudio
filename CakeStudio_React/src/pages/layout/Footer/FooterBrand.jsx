import { Box, IconButton, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

import logo from "../../../assets/images/logo/logo_2.png";

const FooterBrand = () => {
    return (
        <Box>

            <Box
                component="img"
                src={logo}
                alt="CakeStudio"
                sx={{
                    width: 170,
                    mb: 2
                }}
            />

            <Typography
                sx={{
                    color: "#666",
                    fontSize: 14,
                    lineHeight: 1.8,
                    mb: 2
                }}
            >
                Baking happiness into every celebration.
                Fresh cakes delivered to your doorstep.
            </Typography>

            <Box>

                <IconButton color="inherit">
                    <FacebookIcon />
                </IconButton>

                <IconButton color="inherit">
                    <InstagramIcon />
                </IconButton>

                <IconButton color="inherit">
                    <PinterestIcon />
                </IconButton>

                <IconButton color="inherit">
                    <XIcon />
                </IconButton>

            </Box>

        </Box>
    );
};

export default FooterBrand;