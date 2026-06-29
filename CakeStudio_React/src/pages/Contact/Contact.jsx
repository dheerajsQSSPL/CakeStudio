import { useNavigate, useParams } from "react-router-dom";
import ContactComponent from "../../components/Contact/ContactComponent";
import { Box } from "@mui/material";

export function Contact(props) {
    const navigate = useNavigate();
    const params = useParams()
    return (
        <Box>
            <ContactComponent
                {...props}
                navigate={navigate}
                id={params.id}
            />
        </Box>
    )
}