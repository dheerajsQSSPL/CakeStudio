import {
    Box,
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from "recharts";

import "./RevenueChart.css";

const data = [

    {
        name: "Pending",
        value: 15,
        color: "#ff5b84"
    },

    {
        name: "Confirmed",
        value: 35,
        color: "#ffb020"
    },

    {
        name: "Processing",
        value: 30,
        color: "#4285F4"
    },

    {
        name: "Out for Delivery",
        value: 25,
        color: "#8b5cf6"
    },

    {
        name: "Delivered",
        value: 20,
        color: "#42c97a"
    }

];

const totalOrders = data.reduce((sum, item) => sum + item.value, 0);

export default function RevenueChart() {

    return (

        <Card className="status-card">

            <CardContent>

                <Typography className="status-title">

                    Orders by Status

                </Typography>

                <Box className="status-chart">

                    <ResponsiveContainer

                        width="55%"

                        height={280}

                    >

                        <PieChart>

                            <Pie

                                data={data}

                                dataKey="value"

                                innerRadius={70}

                                outerRadius={100}

                                paddingAngle={3}

                            >

                                {

                                    data.map((item, index) => (

                                        <Cell

                                            key={index}

                                            fill={item.color}

                                        />

                                    ))

                                }

                            </Pie>

                        </PieChart>

                    </ResponsiveContainer>

                    <Box className="chart-center">

                        <Typography className="center-value">

                            {totalOrders}

                        </Typography>

                        <Typography className="center-label">

                            Orders

                        </Typography>

                    </Box>

                    <Box className="status-list">

                        {

                            data.map((item) => (

                                <Box

                                    key={item.name}

                                    className="status-item"

                                >

                                    <Box
                                        className="status-dot"
                                        sx={{
                                            background: item.color
                                        }}
                                    />

                                    <Typography className="status-name">

                                        {item.name}

                                    </Typography>

                                    <Typography className="status-count">

                                        {item.value}

                                    </Typography>

                                </Box>

                            ))

                        }

                    </Box>

                </Box>

            </CardContent>

        </Card>

    );

}