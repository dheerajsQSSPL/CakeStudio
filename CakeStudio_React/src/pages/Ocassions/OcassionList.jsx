import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import OccasionDetail from "../../components/Occasions/OccasionDetail";

export default function OccasionList(props) {

    const { slug } = useParams();

    return (
        <Box>
            <OccasionDetail
                {...props}
                slug={slug}
            />
        </Box>
    );
}