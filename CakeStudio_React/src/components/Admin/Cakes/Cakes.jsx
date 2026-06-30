import {
    Box
} from "@mui/material";

import { useState } from "react";

import CakeHeader from "./CakeHeader";
import CakeTable from "./CakeTable";
import DeleteCakeDialog from "./DeleteCakeDialog";

import "./Cakes.css";

export default function Cakes() {

    const [cakes] = useState([

        {
            id: 1,
            name: "Chocolate Truffle Cake",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200",
            price: 899,
            category: "Chocolate"
        },

        {
            id: 2,
            name: "Red Velvet Cake",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200",
            price: 899,
            category: "Red Velvet"
        },

        {
            id: 3,
            name: "Black Forest Cake",
            image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=200",
            price: 949,
            category: "Chocolate"
        },

        {
            id: 4,
            name: "Butterscotch Cake",
            image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=200",
            price: 849,
            category: "Butterscotch"
        },

        {
            id: 5,
            name: "Pineapple Cake",
            image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200",
            price: 799,
            category: "Fruit"
        }

    ]);

    const [selectedCake, setSelectedCake] = useState(null);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleDelete = (cake) => {

        setSelectedCake(cake);

        setOpenDeleteDialog(true);

    };

    return (

        <Box className="cakes-page">

            <CakeHeader />

            <CakeTable

                cakes={cakes}

                onDelete={handleDelete}

            />

            <DeleteCakeDialog

                open={openDeleteDialog}

                cake={selectedCake}

                onClose={() => setOpenDeleteDialog(false)}

                onConfirm={() => {

                    console.log(selectedCake);

                    setOpenDeleteDialog(false);

                }}

            />

        </Box>

    );

}