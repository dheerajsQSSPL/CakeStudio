import {
    Box,
    Button,
    Typography
} from "@mui/material";

import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

import "./EmptyAddresses.css";

export default function EmptyAddresses({ onAddAddress }) {

    return (

        <Box className="empty-addresses">

            <img

                src="/assets/images/empty-address.png"

                alt="No Addresses"

                className="empty-address-image"

            />

            <Typography className="empty-address-title">

                No Saved Addresses

            </Typography>

            <Typography className="empty-address-description">

                You haven't added any delivery addresses yet.
                Save an address now to enjoy faster checkout.

            </Typography>

            <Button

                variant="contained"

                startIcon={<AddLocationAltOutlinedIcon />}

                className="empty-address-button"

                onClick={onAddAddress}

            >

                Add Your First Address

            </Button>

        </Box>

    );

}