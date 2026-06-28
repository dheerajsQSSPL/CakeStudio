import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CustomCakesComponent from "../../components/CustomCakes/CustomCakeComponent";

export default function CustomCakes(props) {
    const params = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <CustomCakesComponent
                {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}