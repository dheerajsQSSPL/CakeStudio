import {
    Box,
    Grid,
    Typography
} from "@mui/material";

import Breadcrumb from "../common/Breadcrumb/Breadcrumb";

// import AccountSidebar from "./AccountSidebar";
// import AccountOverview from "./AccountOverview";

import "./MyAccount.css";
import AccountSidebar from "./AccountSidebar";
import AccountOverview from "./AccountOverview";

export default function MyAccountLayout({children}) {

    return (

        <Box className="account-page">

            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "My Account" }
                ]}
            />

            <Typography className="account-title">

                My Account

            </Typography>

            <Typography className="account-subtitle">

                Manage your profile, orders and preferences

            </Typography>

            <Grid
                container
                spacing={4}
            >

                {/* Sidebar */}

                <Grid size={{ xs: 12, md: 3 }}>

                    <AccountSidebar />

                </Grid>

                {/* Content */}

                <Grid size={{ xs: 12, md: 9 }}>

                   {children}

                </Grid>

            </Grid>

        </Box>

    );

}