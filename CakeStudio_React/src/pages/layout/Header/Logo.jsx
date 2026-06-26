import { Box } from "@mui/material";
import logo from "../../../assets/images/logo/logo_.png"
import logo2 from "../../../assets/images/logo/logo_2.png"
const Logo = () => (
    <Box
        component="img"
        src={logo2}
        alt="CakeStudio"
        sx={{
            height: 42,
            cursor: "pointer"
        }}
    />
);

export default Logo;