import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

export default function DeleteCakeDialog({

    open,

    cake,

    onClose,

    onConfirm

}) {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="xs"

        >

            <DialogTitle

                sx={{

                    display: "flex",

                    alignItems: "center",

                    gap: 1,

                    color: "#d32f2f",

                    fontWeight: 700

                }}

            >

                <WarningAmberOutlinedIcon />

                Delete Cake

            </DialogTitle>

            <DialogContent>

                <Typography
                    sx={{ mt: 1 }}
                >

                    Are you sure you want to delete

                    <strong>

                        {" "}

                        {cake?.name}

                    </strong>

                    ?

                </Typography>

                <Typography

                    sx={{

                        mt: 2,

                        color: "#777",

                        fontSize: 14

                    }}

                >

                    This action cannot be undone. The cake will be permanently removed from your store.

                </Typography>

            </DialogContent>

            <DialogActions sx={{ p: 2 }}>

                <Button

                    onClick={onClose}

                    sx={{

                        textTransform: "none"

                    }}

                >

                    Cancel

                </Button>

                <Button

                    variant="contained"

                    color="error"

                    startIcon={<DeleteForeverOutlinedIcon />}

                    onClick={onConfirm}

                    sx={{

                        textTransform: "none",

                        borderRadius: 2

                    }}

                >

                    Delete Cake

                </Button>

            </DialogActions>

        </Dialog>

    );

}