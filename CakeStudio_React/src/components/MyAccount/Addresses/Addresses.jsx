import {
    Box,
    Button,
    Typography
} from "@mui/material";

import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

import { useState } from "react";

import MyAccountLayout from "../MyAccountLayout";
import AddressList from "./AddressList";
import AddEditAddressDialog from "./AddEditAddressDialog";

import "./Addresses.css";
import DeleteAddressDialog from "./DeleteAddressDialog";

export default function Addresses() {

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [addresses] = useState([

        {
            id: 1,
            fullName: "Dr Raj",
            mobile: "9876543210",
            address: "123 Sweet Street",
            landmark: "Near City Mall",
            city: "Bangalore",
            state: "Karnataka",
            pincode: "560001",
            isDefault: true
        },

        {
            id: 2,
            fullName: "Dr Raj",
            mobile: "9876543210",
            address: "45 MG Road",
            landmark: "",
            city: "Bangalore",
            state: "Karnataka",
            pincode: "560025",
            isDefault: false
        }

    ]);
    const handleEdit = (address) => {

        setSelectedAddress(address);

        setOpenDialog(true);

    };
    const handleDeleteClick = (address) => {

        setSelectedAddress(address);

        setDeleteDialogOpen(true);

    };

    return (

        <Box>

            <Box className="address-header">

                <Box>

                    <Typography className="address-title">

                        My Addresses

                    </Typography>

                    <Typography className="address-subtitle">

                        Manage your delivery addresses.

                    </Typography>

                </Box>

                <Button

                    variant="contained"

                    startIcon={<AddLocationAltOutlinedIcon/>}

                    className="add-address-btn"

                    onClick={() => {
                        setSelectedAddress(null);
                        setOpenDialog(true)
                    }}

                >

                    Add New Address

                </Button>

            </Box>

            <AddressList
                addresses={addresses}
                onAddAddress={() => setOpenDialog(true)}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
            />

            <AddEditAddressDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                address={selectedAddress}
                onSave={(address) => {

                    console.log(address);

                }}
            />

            <DeleteAddressDialog

                open={deleteDialogOpen}

                onClose={() => setDeleteDialogOpen(false)}

                address={selectedAddress}

                onDelete={(id) => {

                    console.log("Delete Address :", id);

                }}

            />

        </Box>

    );

}