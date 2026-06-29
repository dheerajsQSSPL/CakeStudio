import { Box, Stack, Typography } from "@mui/material";
import ContactCard from "./ContactCard";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
export default function ContactInfo() {
    return (
        <>
            <Box className="contact-info">

                <Typography className="contact-info-title">
                    Contact Information
                </Typography>

                <Typography className="contact-info-subtitle">
                    You can also reach us using these contact details.
                </Typography>

                <Stack spacing={1.5}>

                    <ContactCard
                        icon={PhoneOutlinedIcon}
                        title="Phone"
                        value="+91 98765 43210"
                        subValue="Mon–Sat, 9 AM – 8 PM"
                    />

                    <ContactCard
                        icon={EmailOutlinedIcon}
                        title="Email"
                        value="hello@cakestudio.com"
                        subValue="We'll respond within 24 hours."
                    />

                    <ContactCard
                        icon={LocationOnOutlinedIcon}
                        title="Address"
                        value="123 Sweet Street"
                        subValue="Bangalore, Karnataka, India"
                    />

                    <ContactCard
                        icon={AccessTimeOutlinedIcon}
                        title="Working Hours"
                        value="Monday - Sunday"
                        subValue="09:00 AM - 09:00 PM"
                    />

                </Stack>

            </Box>
        </>
    )
}