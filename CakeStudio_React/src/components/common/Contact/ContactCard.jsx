import { Box, Typography } from "@mui/material";

import "./ContactCard.css";

const ContactCard = ({ icon: Icon, title, value, subValue }) => {

    return (

        <Box className="contact-card">

            <Box className="contact-card-icon">

                <Icon className="contact-card-icon-svg" />

            </Box>

            <Box className="contact-card-content">

                <Typography className="contact-card-title">

                    {title}

                </Typography>

                <Typography className="contact-card-value">

                    {value}

                </Typography>

                {subValue && (

                    <Typography className="contact-card-subvalue">

                        {subValue}

                    </Typography>

                )}

            </Box>

        </Box>

    );

};

export default ContactCard;