import { Box } from "@mui/material";
import AdminHomeComponent from "../../../components/Admin/AdminHome/AdminHomeComponent";

export default function AdminHome(props){
    return(
        <Box>
            <AdminHomeComponent {...props}/>
        </Box>
    )
}