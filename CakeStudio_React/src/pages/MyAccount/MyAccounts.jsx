import { Box } from "@mui/material";
import MyAccountLayout from "../../components/MyAccount/MyAccountLayout";
import { useNavigate } from "react-router-dom";
import AccountOverview from "../../components/MyAccount/AccountOverview";

export default function MyAccounts(props) {
    const navigate = useNavigate()
    return (
        <Box>
            <MyAccountLayout>
                <AccountOverview/>
            </MyAccountLayout>
        </Box>
    )
}