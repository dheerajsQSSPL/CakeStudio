import { Box } from "@mui/material";
import Orders from "../../components/MyAccount/Orders/Orders";
import MyAccountLayout from "../../components/MyAccount/MyAccountLayout";

export default function Order(props) {
    return (
        <Box>
            <MyAccountLayout>
                <Orders/>
            </MyAccountLayout>
        </Box>
    )
}