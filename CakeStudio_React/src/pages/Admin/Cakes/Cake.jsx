
import { Box } from "@mui/material";
import Cakes from "../../../components/Admin/Cakes/Cakes"

export default function Cake(props) {
    return (
        <>
            <Box>
                <Cakes {...props} />
            </Box>
        </>
    )
}