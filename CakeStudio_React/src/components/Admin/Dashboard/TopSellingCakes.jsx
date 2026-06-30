import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Typography
} from "@mui/material";

import "./TopSellingCakes.css";

const cakes = [

    {
        id: 1,
        name: "Chocolate Truffle",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200",
        orders: 84,
        revenue: "₹75,516"
    },

    {
        id: 2,
        name: "Red Velvet",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200",
        orders: 71,
        revenue: "₹63,829"
    },

    {
        id: 3,
        name: "Black Forest",
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=200",
        orders: 58,
        revenue: "₹51,942"
    },

    {
        id: 4,
        name: "Butterscotch",
        image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=200",
        orders: 49,
        revenue: "₹43,610"
    }

];

export default function TopSellingCakes() {

    return (

        <Card className="top-cakes-card">

            <CardContent>

                <Box className="top-cakes-header">

                    <Typography className="top-cakes-title">

                        Top Selling Cakes

                    </Typography>

                    <Typography className="view-all">

                        View All

                    </Typography>

                </Box>

                {

                    cakes.map((cake, index) => (

                        <Box

                            key={cake.id}

                        >

                            <Box className="cake-row">

                                <Avatar

                                    src={cake.image}

                                    variant="rounded"

                                    className="cake-image"

                                />

                                <Box className="cake-details">

                                    <Typography className="cake-name">

                                        {cake.name}

                                    </Typography>

                                    <Typography className="cake-orders">

                                        {cake.orders} Orders

                                    </Typography>

                                </Box>

                                <Typography className="cake-revenue">

                                    {cake.revenue}

                                </Typography>

                            </Box>

                            {

                                index !== cakes.length - 1 &&

                                <Divider sx={{ my: 2 }} />

                            }

                        </Box>

                    ))

                }

            </CardContent>

        </Card>

    );

}