import {
    Box,
    Button,
    Container,
    Typography
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";

import { useNavigate } from "react-router-dom";
import notfoundlogo from "../../assets/images/not_found_cake.png"
import "./NotFound.css";

export default function NotFound() {

    const navigate = useNavigate();

    return (

        <Container maxWidth="lg">

            <Box className="notfound-page">

                {/* Left */}

                <Box className="notfound-content">

                    <Typography className="error-code">

                        404

                    </Typography>

                    <Typography className="error-title">

                        Oops! Page Not Found

                    </Typography>

                    <Typography className="error-divider">

                        ❤

                    </Typography>

                    <Typography className="error-description">

                        We can't seem to find the page you're looking for.

                        It might have been moved, deleted, or never existed.

                    </Typography>

                    <Box className="button-group">

                        <Button

                            variant="contained"

                            startIcon={<HomeOutlinedIcon />}

                            className="home-btn"

                            onClick={() => navigate("/")}

                        >

                            Go to Homepage

                        </Button>

                        <Button

                            variant="outlined"

                            startIcon={<BakeryDiningOutlinedIcon />}

                            className="cakes-btn"

                            onClick={() => navigate("/cakes")}

                        >

                            Browse Cakes

                        </Button>

                    </Box>

                </Box>

                {/* Right */}

                <Box className="image-wrapper">

                    <img

                        src={notfoundlogo}

                        alt="404"

                        className="notfound-image"

                    />

                </Box>

            </Box>

        </Container>

    );

}