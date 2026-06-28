import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

import "./OccasionCard.css";

const OccasionCard = ({ occasion }) => {

    const navigate = useNavigate();

    return (

        <Card className="occasion-card">

            <CardMedia
                component="img"
                image={occasion.image}
                alt={occasion.title}
                className="occasion-image"
            />

            <CardContent className="occasion-content">

                <Typography className="occasion-title">

                    {occasion.title}

                </Typography>

                <Typography className="occasion-count">

                    {occasion.totalCakes} Cakes

                </Typography>

                <Button

                    variant="outlined"

                    endIcon={<ArrowForwardIcon />}

                    className="occasion-btn"

                    onClick={() =>
                        navigate(`/occasions/${occasion.slug}`)
                    }

                >

                    Explore Cakes

                </Button>

            </CardContent>

        </Card>

    );

};

export default OccasionCard;