import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "./DeleteUserDialog.css";

export default function DeleteUserDialog({

    open,

    onClose,

    user,

    onConfirm

}) {

    const handleDelete = () => {

        onConfirm();

        onClose();

    };

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="xs"

            fullWidth

        >

            <DialogTitle className="delete-user-title">

                Delete User

            </DialogTitle>

            <DialogContent>

                <Typography className="delete-user-text">

                    Are you sure you want to delete

                    <strong>

                        {" "}

                        {user?.fullName}

                    </strong>

                    ?

                </Typography>

                <Typography className="delete-user-warning">

                    This action cannot be undone. The user's account and related information may no longer be accessible.

                </Typography>

            </DialogContent>

            <DialogActions>

                <Button

                    onClick={onClose}

                    className="cancel-user-btn"

                >

                    Cancel

                </Button>

                <Button

                    variant="contained"

                    color="error"

                    startIcon={<DeleteForeverOutlinedIcon />}

                    className="confirm-user-delete-btn"

                    onClick={handleDelete}

                >

                    Delete

                </Button>

            </DialogActions>

        </Dialog>

    );

}