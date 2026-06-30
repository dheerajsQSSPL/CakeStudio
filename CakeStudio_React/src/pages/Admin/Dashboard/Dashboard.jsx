import { Box } from "@mui/material";
import DashboardComponent from "../../../components/Admin/Dashboard/DashboardComponent";
import { useNavigate, useParams } from "react-router-dom";

export default function Dashboard(props){
    const params  = useParams();
    const navigate = useNavigate()
    return (
        <Box>
            <DashboardComponent {...props} navigate = {navigate} id = {params.id}/>
        </Box>
    )
}