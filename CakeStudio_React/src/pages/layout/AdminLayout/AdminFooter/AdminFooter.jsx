import { Box, Typography } from "@mui/material";

import "./AdminFooter.css";

export default function AdminFooter() {

    const year = new Date().getFullYear();

    return (

        <Box className="admin-footer">

            <Typography className="footer-left">

                © {year} CakeStudio. All rights reserved.

            </Typography>

            <Typography className="footer-right">

                Made with ❤️ for Cake Lovers

            </Typography>

        </Box>

    );

}