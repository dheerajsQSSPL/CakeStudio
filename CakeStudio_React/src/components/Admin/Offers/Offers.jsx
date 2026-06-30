import {
    Box,
    Button,
    Chip,
    Typography
} from "@mui/material";

import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";

import "./Offers.css";

export default function Offers() {

    return (

        <Box className="offers-page">

            <Box className="offers-card">

                <Chip

                    icon={<ConstructionOutlinedIcon />}

                    label="Coming Soon"

                    className="offers-chip"

                />

                <CampaignOutlinedIcon

                    className="offers-icon"

                />

                <Typography className="offers-title">

                    Offers Module

                </Typography>

                <Typography className="offers-description">

                    This module is currently under development.

                    Soon you'll be able to create promotional offers,

                    discount campaigns, coupon codes, seasonal deals,

                    and manage offer validity from this section.

                </Typography>

                <Button

                    variant="contained"

                    className="offers-btn"

                    disabled

                >

                    Feature Coming Soon

                </Button>

            </Box>

        </Box>

    );

}