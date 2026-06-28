import { Box, Button, TextField, Typography } from "@mui/material";

const Newsletter = () => {

    return (

        <Box>

            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: 18
                }}
            >
                Newsletter
            </Typography>

            <Typography
                sx={{
                    color: "#666",
                    mb: 2,
                    fontSize: 14
                }}
            >
                Subscribe to get special offers and updates.
            </Typography>

            <TextField
                fullWidth
                size="small"
                placeholder="Enter your email"
                sx={{
                    mb: 2
                }}
            />

            <Button
                fullWidth
                variant="contained"
                sx={{
                    background: "#ff5b84",
                    textTransform: "none",

                    "&:hover": {
                        background: "#f04272"
                    }
                }}
            >
                Subscribe
            </Button>

        </Box>

    );
};

export default Newsletter;