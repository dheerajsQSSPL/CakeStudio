import { Box } from "@mui/material";

import AddressCard from "./AddressCard";
import EmptyAddresses from "./EmptyAddresses";

export default function AddressList({ addresses, onAddAddress, onEdit, onDelete }) {

    if (!addresses || addresses.length === 0) {

        return <EmptyAddresses onAddAddress={onAddAddress} />;

    }

    return (

        <Box>

            {

                addresses.map(address => (

                    <AddressCard

                        key={address.id}
                        onDelete={onDelete}
                        address={address}
                        onEdit={onEdit}

                    />

                ))

            }

        </Box>

    );

}