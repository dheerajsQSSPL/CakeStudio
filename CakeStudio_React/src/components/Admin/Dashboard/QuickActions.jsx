import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import { useNavigate } from "react-router-dom";

import "./QuickActions.css";

export default function QuickActions() {

    const navigate = useNavigate();

    const actions = [

        {
            title: "Add Cake",
            icon: <AddCircleOutlineOutlinedIcon />,
            path: "/admin/cakes/add"
        },

        {
            title: "View Orders",
            icon: <ShoppingBagOutlinedIcon />,
            path: "/admin/orders"
        },

        {
            title: "Categories",
            icon: <CategoryOutlinedIcon />,
            path: "/admin/categories"
        },

        {
            title: "Create Offer",
            icon: <LocalOfferOutlinedIcon />,
            path: "/admin/offers/add"
        }

    ];

    return (

        <Card className="quick-card">

            <CardContent>

                <Typography className="quick-title">

                    Quick Actions

                </Typography>

                <Grid
                    container
                    spacing={3}
                    sx={{ mt: 1 }}
                >

                    {

                        actions.map(action => (

                            <Grid
                                key={action.title}
                                size={{ xs: 12, sm: 6, md: 3 }}
                            >

                                <Button

                                    fullWidth

                                    startIcon={action.icon}

                                    className="quick-btn"

                                    onClick={() => navigate(action.path)}

                                >

                                    {action.title}

                                </Button>

                            </Grid>

                        ))

                    }

                </Grid>

            </CardContent>

        </Card>

    );

}