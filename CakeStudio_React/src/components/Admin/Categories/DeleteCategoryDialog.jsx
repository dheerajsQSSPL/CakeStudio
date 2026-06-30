import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "./DeleteCategoryDialog.css";

export default function DeleteCategoryDialog({

    open,

    onClose,

    category,

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

            <DialogTitle className="delete-category-title">

                Delete Category

            </DialogTitle>

            <DialogContent>

                <Typography className="delete-category-text">

                    Are you sure you want to delete

                    <strong>

                        {" "}

                        {category?.name}

                    </strong>

                    ?

                </Typography>

                <Typography className="delete-category-warning">

                    This action cannot be undone.

                </Typography>

            </DialogContent>

            <DialogActions>

                <Button

                    onClick={onClose}

                    className="cancel-delete-btn"

                >

                    Cancel

                </Button>

                <Button

                    variant="contained"

                    color="error"

                    startIcon={<DeleteForeverOutlinedIcon />}

                    className="confirm-delete-btn"

                    onClick={handleDelete}

                >

                    Delete

                </Button>

            </DialogActions>

        </Dialog>

    );

}