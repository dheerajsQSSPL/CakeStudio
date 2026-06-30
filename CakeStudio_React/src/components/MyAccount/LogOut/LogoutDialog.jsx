import {
    Box,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    Typography
} from "@mui/material";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CloseIcon from "@mui/icons-material/Close";

import "./LogoutDialog.css";

export default function LogoutDialog({

    open,

    onClose,

    onLogout

}) {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="xs"

            fullWidth

        >

            <DialogContent className="logout-dialog">

                <IconButton

                    className="logout-close"

                    onClick={onClose}

                >

                    <CloseIcon />

                </IconButton>

                <Box className="logout-icon">

                    <LogoutOutlinedIcon />

                </Box>

                <Typography className="logout-title">

                    Logout

                </Typography>

                <Typography className="logout-text">

                    Are you sure you want to logout from your account?

                </Typography>

                <Box className="logout-actions">

                    <Button

                        variant="outlined"

                        className="cancel-btn"

                        onClick={onClose}

                    >

                        Cancel

                    </Button>

                    <Button

                        variant="contained"

                        className="logout-btn"

                        startIcon={<LogoutOutlinedIcon />}

                        onClick={onLogout}

                    >

                        Yes, Logout

                    </Button>

                </Box>

            </DialogContent>

        </Dialog>

    );

}