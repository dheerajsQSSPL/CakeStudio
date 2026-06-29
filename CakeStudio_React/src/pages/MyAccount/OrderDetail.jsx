import { Box } from "@mui/material";
import MyAccountLayout from "../../components/MyAccount/MyAccountLayout";
import OrderDetails from "../../components/MyAccount/Orders/OrderDetails/OrderDetails";
import { useParams } from "react-router-dom";


export default function OrderDetail(props) {
    const { orderId } = useParams()
    return (
        <Box>
            <MyAccountLayout>
                <OrderDetails
                    {...props}
                    id={orderId}
                />
            </MyAccountLayout>
        </Box>
    )
}