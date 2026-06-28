import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import OffersComponent from "../../components/Offers/OffersComponent";

export default function Offers(props) {
    const params = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <OffersComponent
                {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}