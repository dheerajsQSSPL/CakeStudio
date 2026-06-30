import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import "./adminhome.css"
import { useNavigate } from "react-router-dom";

export default function AdminHomeComponent() {

    const navigate = useNavigate();

    const cards = [

        {
            title: "Dashboard",
            description: "View sales, revenue and analytics.",
            icon: <DashboardOutlinedIcon sx={{ fontSize: 42 }} />,
            path: "/admin/dashboard"
        },

        {
            title: "Manage Cakes",
            description: "Add, edit and manage cake catalogue.",
            icon: <CakeOutlinedIcon sx={{ fontSize: 42 }} />,
            path: "/admin/cakes"
        },

        {
            title: "Manage Orders",
            description: "Track customer orders and deliveries.",
            icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 42 }} />,
            path: "/admin/orders"
        },

        {
            title: "Categories",
            description: "Create and organize cake categories.",
            icon: <CategoryOutlinedIcon sx={{ fontSize: 42 }} />,
            path: "/admin/categories"
        }

    ];

    return (

        <Box sx={{ p: 2 }}>

            <Box className="admin-home-header">

                <Typography className="admin-home-title">

                    Welcome to CakeStudio Admin 👋

                </Typography>

                <Typography className="admin-home-subtitle">

                    Manage cakes, orders, customers and grow your bakery business from one place.

                </Typography>

            </Box>

            <Grid
                container
                spacing={3}
                sx={{
                    marginBottom:"85px"
                }}
            >

                {

                    cards.map(card => (

                        <Grid
                            key={card.title}
                            size={{ xs: 12, sm: 6, md: 3 }}
                        >

                            <Card

                                sx={{

                                    borderRadius: 4,

                                    height: "100%",

                                    transition: ".3s",

                                    cursor: "pointer",

                                    "&:hover": {

                                        transform: "translateY(-6px)",

                                        boxShadow: 6

                                    }

                                }}

                            >

                                <CardContent

                                    sx={{

                                        textAlign: "center",

                                        py: 5

                                    }}

                                >

                                    <Box

                                        sx={{

                                            color: "#ff5b84",

                                            mb: 2

                                        }}

                                    >

                                        {card.icon}

                                    </Box>

                                    <Typography

                                        variant="h6"

                                        fontWeight={700}

                                        mb={1}

                                    >

                                        {card.title}

                                    </Typography>

                                    <Typography

                                        color="text.secondary"

                                        mb={3}

                                    >

                                        {card.description}

                                    </Typography>

                                    <Button

                                        variant="contained"

                                        onClick={() => navigate(card.path)}

                                        sx={{

                                            background: "#ff5b84",

                                            textTransform: "none",

                                            borderRadius: "12px",

                                            "&:hover": {

                                                background: "#e84b74"

                                            }

                                        }}

                                    >

                                        Open

                                    </Button>

                                </CardContent>

                            </Card>

                        </Grid>

                    ))

                }

            </Grid>

        </Box>

    );

}