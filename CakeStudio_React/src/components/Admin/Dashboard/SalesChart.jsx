import {
    Card,
    CardContent,
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem
} from "@mui/material";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

import { useState } from "react";

import "./SalesChart.css";

const data = [

    { day: "May 1", sales: 5000 },
    { day: "May 5", sales: 9000 },
    { day: "May 10", sales: 18000 },
    { day: "May 15", sales: 11000 },
    { day: "May 20", sales: 15000 },
    { day: "May 25", sales: 14000 },
    { day: "May 31", sales: 22000 }

];

export default function SalesChart() {

    const [month, setMonth] = useState("This Month");

    return (

        <Card className="sales-card">

            <CardContent>

                <Box className="sales-header">

                    <Typography className="sales-title">

                        Sales Overview

                    </Typography>

                    <FormControl size="small">

                        <Select

                            value={month}

                            onChange={(e) => setMonth(e.target.value)}

                        >

                            <MenuItem value="This Month">

                                This Month

                            </MenuItem>

                            <MenuItem value="Last Month">

                                Last Month

                            </MenuItem>

                        </Select>

                    </FormControl>

                </Box>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient

                                id="salesGradient"

                                x1="0"

                                y1="0"

                                x2="0"

                                y2="1"

                            >

                                <stop

                                    offset="5%"

                                    stopColor="#ff5b84"

                                    stopOpacity={0.4}

                                />

                                <stop

                                    offset="95%"

                                    stopColor="#ff5b84"

                                    stopOpacity={0}

                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="day" />

                        <YAxis />

                        <Tooltip />

                        <Area

                            type="monotone"

                            dataKey="sales"

                            stroke="#ff5b84"

                            strokeWidth={3}

                            fill="url(#salesGradient)"

                        />

                    </AreaChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}