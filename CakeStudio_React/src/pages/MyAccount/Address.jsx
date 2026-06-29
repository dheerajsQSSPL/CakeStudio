import { Box } from "@mui/material";
import MyAccountLayout from "../../components/MyAccount/MyAccountLayout";
import Addresses from "../../components/MyAccount/Addresses/Addresses";

export default function Address(props){
    return(
        <Box>
            <MyAccountLayout>
                <Addresses {...props}/>
            </MyAccountLayout>
        </Box>
    )
}