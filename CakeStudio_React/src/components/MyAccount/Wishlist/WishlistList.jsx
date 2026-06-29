import { Box } from "@mui/material";

import WishlistItem from "./WishlistItem";
import EmptyWishlist from "./EmptyWishlist";

export default function WishlistList({

    wishlist,

    onRemove,

    onAddToCart

}) {

    if (!wishlist || wishlist.length === 0) {

        return (

            <EmptyWishlist />

        );

    }

    return (

        <Box>

            {

                wishlist.map(item => (

                    <WishlistItem

                        key={item.id}

                        item={item}

                        onRemove={onRemove}

                        onAddToCart={onAddToCart}

                    />

                ))

            }

        </Box>

    );

}