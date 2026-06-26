import { Box } from "@mui/material";
import RegisterComponent from "../../components/RegisterComponent/RegisterComponent";
import { useNavigate, useParams } from "react-router-dom";

export default function Register(props) {
    const params = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <RegisterComponent
                {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}