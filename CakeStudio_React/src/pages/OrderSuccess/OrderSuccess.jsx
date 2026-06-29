import { Box } from "@mui/material";
import OrderSuccessComponent from "../../components/OrderSuccess/OrderSuccessComponent";
import { useNavigate, useParams } from "react-router-dom";

export default function OrderSuccess(props) {
    const navigate = useNavigate()
    const {orderId} = useParams()
    return (
        <>
            <Box>
                <OrderSuccessComponent
                    {...props}
                    navigate={navigate}
                    orderId={orderId}
                />
            </Box>
        </>
    )
}