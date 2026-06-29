import { Box } from "@mui/material";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { useNavigate } from "react-router-dom";

import PrimaryButton from "../common/CustomFields/PrimaryButton/PrimaryButton";

import "./SuccessActions.css";

export default function SuccessActions({ orderId }) {

    const navigate = useNavigate();

    return (

        <Box className="success-actions">

            <PrimaryButton

                className="track-btn"

                startIcon={<LocalShippingOutlinedIcon />}

                onClick={() =>
                    navigate(`/orders/${orderId}`)
                }

            >

                Track Order

            </PrimaryButton>

            <PrimaryButton

                variant="outlined"

                className="continue-btn"

                startIcon={<ShoppingBagOutlinedIcon />}

                onClick={() =>
                    navigate("/cakes")
                }

            >

                Continue Shopping

            </PrimaryButton>

            <PrimaryButton

                variant="outlined"

                className="home-btn"

                startIcon={<HomeOutlinedIcon />}

                onClick={() =>
                    navigate("/")
                }

            >

                Back Home

            </PrimaryButton>

        </Box>

    );

}