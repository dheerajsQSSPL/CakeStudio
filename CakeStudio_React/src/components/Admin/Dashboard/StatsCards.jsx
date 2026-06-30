import {
    Box,
    Card,
    CardContent,
    Typography
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import "./StatsCards.css";

export default function StatsCards() {

    const stats = [

        {
            title: "Total Orders",
            value: "125",
            growth: "+12.5%",
            subtitle: "from last month",
            icon: <ShoppingBagOutlinedIcon />,
            color: "#ff5b84",
            background: "#fff2f6"
        },

        {
            title: "Total Revenue",
            value: "₹1,25,800",
            growth: "+18.6%",
            subtitle: "from last month",
            icon: <CurrencyRupeeOutlinedIcon />,
            color: "#ffb020",
            background: "#fff8e8"
        },

        {
            title: "Total Cakes",
            value: "48",
            growth: "+8.3%",
            subtitle: "from last month",
            icon: <CakeOutlinedIcon />,
            color: "#3b82f6",
            background: "#eef5ff"
        },

        {
            title: "Total Users",
            value: "320",
            growth: "+15.4%",
            subtitle: "from last month",
            icon: <PeopleOutlineOutlinedIcon />,
            color: "#8b5cf6",
            background: "#f5efff"
        }

    ];

    return (

        <Box className="stats-container">

            {

                stats.map((item) => (

                    <Card

                        key={item.title}

                        className="stats-card"

                    >

                        <CardContent>

                            <Box className="stats-header">

                                <Box

                                    className="stats-icon"

                                    sx={{

                                        background: item.background,

                                        color: item.color

                                    }}

                                >

                                    {item.icon}

                                </Box>

                                <Box>

                                    <Typography className="stats-title">

                                        {item.title}

                                    </Typography>

                                    <Typography className="stats-value">

                                        {item.value}

                                    </Typography>

                                </Box>

                            </Box>

                            <Box className="stats-footer">

                                <TrendingUpOutlinedIcon />

                                <Typography className="stats-growth">

                                    {item.growth}

                                </Typography>

                                <Typography className="stats-subtitle">

                                    {item.subtitle}

                                </Typography>

                            </Box>

                        </CardContent>

                    </Card>

                ))

            }

        </Box>

    );

}