import { Box } from "@mui/material";
import CakeComponent from "../../components/Cakes/Cakes";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import OccasionsComponent from "../../components/Occasions/OccasionsComponent";

export default function Occasions(props) {
    const params = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <OccasionsComponent
                {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}