import {
    Box,
    Typography
} from "@mui/material";

import { useState } from "react";

import MyAccountLayout from "../MyAccountLayout";

import WishlistHeader from "./WishlistHeader";
import WishlistList from "./WishlistList";

import "./Wishlist.css";

export default function Wishlist() {

    const [wishlist] = useState([

        {
            id: 1,
            name: "Chocolate Truffle Cake",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",
            description: "Rich chocolate sponge layered with silky chocolate truffle.",
            weight: "500 g",
            price: 1699,
            rating: 4.5,
            reviews: 128,
            inStock: true
        },
        {
            id: 2,
            name: "Red Velvet Cake",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3U6ZS-w7oeuOSgCbBGC3eAoyqjIKTjFrBn8zx7MdHXTJyuh75vVg5fkjq60dc5XEolbs6aAD66Bj772_g0q5wIt4GtmQkZt6PMuBJm1Wu79F4pexnBAV1BlM&usqp=CAc",
            description: "Classic red velvet with cream cheese frosting.",
            weight: "1 Kg",
            price: 1499,
            rating: 4.5,
            reviews: 96,
            inStock: true
        }

    ]);

    return (

        <Box>

            <WishlistHeader

                totalItems={wishlist.length}

            />

            <WishlistList

                wishlist={wishlist}

            />

        </Box>

    );

}