import { Box } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards"
import "./Dashboard.css"
import SalesChart from "./SalesChart";
import RevenueChart from "./RevenueChart";
import RecentOrdersTable from "./RecentOrdersTable";
import TopSellingCakes from "./TopSellingCakes";
import QuickActions from "./QuickActions";

export default function DashboardComponent(props) {
    return (

        <Box className="dashboard-page">
            <DashboardHeader />

            <StatsCards />

            <Box className="dashboard-grid">

                <SalesChart />

                <RevenueChart />

            </Box>

            <Box className="dashboard-grid">

                <RecentOrdersTable />

                <TopSellingCakes />

            </Box>

            <QuickActions />

        </Box>

    );
}