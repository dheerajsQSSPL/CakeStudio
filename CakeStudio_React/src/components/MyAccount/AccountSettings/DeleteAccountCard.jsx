import {
    Box,
    Button,
    Card,
    CardContent,
    Typography
} from "@mui/material";

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "./DeleteAccountCard.css";

export default function DeleteAccountCard({

    onDelete

}) {

    return (

        <Card className="delete-account-card">

            <CardContent>

                <Box className="delete-header">

                    <WarningAmberOutlinedIcon />

                    <Box>

                        <Typography className="delete-title">

                            Delete Account

                        </Typography>

                        <Typography className="delete-subtitle">

                            This action is permanent and cannot be undone.

                        </Typography>

                    </Box>

                </Box>

                <Box className="delete-content">

                    <Typography className="delete-description">

                        Deleting your CakeStudio account will permanently remove:

                    </Typography>

                    <ul className="delete-list">

                        <li>Your profile information</li>

                        <li>Saved addresses</li>

                        <li>Your wishlist</li>

                        <li>Order history</li>

                        <li>Saved preferences</li>

                    </ul>

                    <Typography className="delete-note">

                        You won't be able to recover your account after deletion.

                    </Typography>

                </Box>

                <Button

                    variant="contained"

                    color="error"

                    startIcon={<DeleteForeverOutlinedIcon />}

                    className="delete-account-btn"

                    onClick={onDelete}

                >

                    Delete My Account

                </Button>

            </CardContent>

        </Card>

    );

}