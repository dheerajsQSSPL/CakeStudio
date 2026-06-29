import { Grid } from "@mui/material";

import UserInformationCard from "./UserInformationCard";
import RecentOrdersCard from "./RecentOrdersCard";
import AccountSupportCard from "./AccountSupportCard";

export default function AccountOverview() {

    const user = {

        fullName: "Dr Raj",

        email: "drraj@gmail.com",

        mobile: "+91 9876543210",

        emailVerified: true,

        mobileVerified: true

    };

    const recentOrders = [

        {
            id: "ORD-1001",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",
            cakeName: "Chocolate Truffle",
            date: "29 Jun 2026",
            amount: 1798,
            status: "Delivered"
        },
        {
            id: "ORD-1002",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",
            cakeName: "Red Velvet",
            date: "01 Jul 2026",
            amount: 899,
            status: "Processing"
        }

    ];

    return (

        <Grid
            container
            spacing={3}
        >

            <Grid size={{ xs: 12 }}>

                <UserInformationCard
                    user={user}
                />

            </Grid>

            <Grid size={{ xs: 12 }}>

                <RecentOrdersCard
                    orders={recentOrders}
                />

            </Grid>

            <Grid size={{ xs: 12 }}>

                <AccountSupportCard />

            </Grid>

        </Grid>

    );

}