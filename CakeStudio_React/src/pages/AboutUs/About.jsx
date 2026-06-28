import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AboutComponent from "../../components/AboutUs/AboutComponent";

export default function About(props) {
    const params = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <AboutComponent
                {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}