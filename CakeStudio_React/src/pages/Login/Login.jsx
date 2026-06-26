import { Box } from "@mui/material";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import { useNavigate, useParams } from "react-router-dom";

export default function Login(props) {
    const params = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <LoginComponent {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}