import { Box, Link, Typography } from "@mui/material";
import { footerSections } from "../../../constants/footerData";

const FooterLinks = ({ section }) => {

    const currentSection = footerSections.find(
        x => x.title === section
    );

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
                {currentSection.title}
            </Typography>

            {
                currentSection.links.map((link, index) => (

                    <Link
                        key={index}
                        href="#"
                        underline="none"
                        color="inherit"
                        sx={{
                            display: "block",
                            mb: 1,
                            color: "#666",
                            fontSize: 14,

                            "&:hover": {
                                color: "#ff5b84"
                            }
                        }}
                    >
                        {link}
                    </Link>

                ))
            }

        </Box>
    );
};

export default FooterLinks;