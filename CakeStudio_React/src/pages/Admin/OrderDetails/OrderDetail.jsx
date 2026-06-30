import { Box } from "@mui/material";
import OrderDetails from "../../../components/Admin/OrderDetails/OrderDetails";
import { useParams } from "react-router-dom";

export default function OrderDetail(props) {
    const { orderId } = useParams();
    return (
        <Box>
            <OrderDetails {...props} id={orderId} />
        </Box>
    )
}