import { Box } from "@mui/material";
import CheckoutComponent from "../../components/Checkout/CheckoutComponent";
import { useNavigate } from "react-router-dom";

export default function Checkout(props) {
    const navigate = useNavigate()
    return (
        <Box>
            <CheckoutComponent
                {...props}
                navigate={navigate}
            />
        </Box>
    )
}