import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterSection = ({ title, children, defaultExpanded = true }) => {

    return (

        <Accordion
            disableGutters
            elevation={0}
            defaultExpanded={defaultExpanded}
        >

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                <Typography
                    sx={{
                        fontWeight: 600
                    }}
                >
                    {title}
                </Typography>

            </AccordionSummary>

            <AccordionDetails>

                {children}

            </AccordionDetails>

        </Accordion>

    );

};

export default FilterSection;