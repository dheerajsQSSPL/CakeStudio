import { Box } from "@mui/material";
import HomePage from "../../components/Home/HomePage";
import { useNavigate, useParams } from "react-router-dom";

export default function Home(props) {
    const params = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <HomePage
                {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}