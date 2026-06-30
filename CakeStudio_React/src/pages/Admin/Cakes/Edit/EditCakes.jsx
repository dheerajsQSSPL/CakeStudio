import { Box } from "@mui/material";
import EditCake from "../../../../components/Admin/Cakes/EditCake/EditCake";
import { useParams } from "react-router-dom";

export default function EditCakes(props){
    const { id } = useParams()
    return (
        <Box>
            <EditCake {...props} id={id}/>
        </Box>
    )
}