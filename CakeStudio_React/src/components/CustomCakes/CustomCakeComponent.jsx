import { Box, Typography } from "@mui/material";

export default function CustomCakesComponent() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography
        variant="h2"
        fontWeight={700}
        color="text.primary"
        gutterBottom
      >
        🚧 Not Implemented
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ maxWidth: 700 }}
      >
        This feature is currently under development and will be available in a
        future update. Stay tuned for exciting custom cake designing features!
      </Typography>
    </Box>
  );
}