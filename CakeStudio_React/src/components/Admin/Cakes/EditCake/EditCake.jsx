import {
    Box,
    Breadcrumbs,
    Link,
    Typography
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import CakeForm from "../AddCake/CakeForm";

import "./EditCake.css";

export default function EditCake() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [cake, setCake] = useState(null);

    useEffect(() => {

        // Later replace with API call

        const existingCake = {

            id,

            name: "Chocolate Truffle Cake",

            description: "Rich chocolate cake with creamy truffle frosting.",

            category: "Chocolate",

            price: 899,

            image: null

        };

        setCake(existingCake);

    }, [id]);

    if (!cake) {

        return null;

    }

    return (

        <Box className="edit-cake-page">

            <Breadcrumbs>

                <Link

                    underline="hover"

                    sx={{

                        cursor: "pointer",

                        color: "#ff5b84"

                    }}

                    onClick={() => navigate("/admin/cakes")}

                >

                    Cakes

                </Link>

                <Typography>

                    Edit Cake

                </Typography>

            </Breadcrumbs>

            <CakeForm

                initialValues={cake}

                isEdit={true}

            />

        </Box>

    );

}