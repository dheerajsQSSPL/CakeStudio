import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Typography
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import "./AddressCard.css";

export default function AddressCard({

    address,

    onEdit,

    onDelete,

    onSetDefault

}) {

    return (

        <Card className="address-card">

            <CardContent>

                <Box className="address-top">

                    <Box className="address-user">

                        <PersonOutlineOutlinedIcon />

                        <Typography className="customer-name">

                            {address.fullName}

                        </Typography>

                    </Box>

                    {

                        address.isDefault &&

                        <Chip

                            label="Default Address"

                            sx={{
                                background: "#fff2f6",
                                color: "#ff5b84",
                                border: "1px solid #ffd5df",
                                fontWeight: 600
                            }}

                        />

                    }

                </Box>

                <Box className="address-info">

                    <Box className="address-row">

                        <PhoneOutlinedIcon />

                        <Typography>

                            {address.mobile}

                        </Typography>

                    </Box>

                    <Box className="address-row">

                        <LocationOnOutlinedIcon />

                        <Typography>

                            {address.address},

                            {

                                address.landmark &&

                                ` ${address.landmark},`

                            }

                            {" "}

                            {address.city},

                            {" "}

                            {address.state}

                            {" - "}

                            {address.pincode}

                        </Typography>

                    </Box>

                </Box>

                <Box className="address-actions">

                    <Button

                        variant="outlined"

                        startIcon={<EditOutlinedIcon />}

                        onClick={() => onEdit(address)}

                    >

                        Edit

                    </Button>

                    <Button

                        variant="outlined"

                        color="error"

                        startIcon={<DeleteOutlineOutlinedIcon />}

                        onClick={() => onDelete(address)}

                    >

                        Delete

                    </Button>

                    {

                        !address.isDefault &&

                        <Button

                            variant="contained"

                            startIcon={<StarBorderRoundedIcon />}

                            onClick={() => onSetDefault(address.id)}
                            sx={{
                                background: "#ff5b84",
                                "&:hover": {
                                    background: "#e84b74"
                                }
                            }}

                        >

                            Set as Default

                        </Button>

                    }

                </Box>

            </CardContent>

        </Card>

    );

}