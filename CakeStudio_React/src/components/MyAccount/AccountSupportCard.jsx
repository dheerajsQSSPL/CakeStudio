import {
    Box,
    Button,
    Card,
    CardContent,
    Typography
} from "@mui/material";

import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

import { useNavigate } from "react-router-dom";

import "./AccountSupportCard.css";

export default function AccountSupportCard() {

    const navigate = useNavigate();

    return (

        <Card className="support-card">

            <CardContent className="support-content">

                <Box className="support-left">

                    <Box className="support-icon">

                        <SupportAgentOutlinedIcon />

                    </Box>

                    <Box>

                        <Typography className="support-title">

                            Need Help?

                        </Typography>

                        <Typography className="support-description">

                            Our CakeStudio support team is available 24/7 to
                            assist you with orders, payments, refunds and
                            delivery related queries.

                        </Typography>

                    </Box>

                </Box>

                <Button

                    variant="contained"

                    startIcon={<ChatOutlinedIcon />}

                    className="support-button"

                    onClick={() => navigate("/contact")}

                >

                    Contact Support

                </Button>

            </CardContent>

        </Card>

    );

}