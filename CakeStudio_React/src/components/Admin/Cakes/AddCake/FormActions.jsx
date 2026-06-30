import {
    Box,
    Button
} from "@mui/material";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { useNavigate } from "react-router-dom";

import "./FormActions.css";

export default function FormActions({

    submitText = "Save Cake",

    loading = false,

    onSubmit

}) {

    const navigate = useNavigate();

    return (

        <Box className="form-actions">

            <Button

                variant="outlined"

                startIcon={<CloseOutlinedIcon />}

                className="cancel-btn"

                onClick={() => navigate("/admin/cakes")}

            >

                Cancel

            </Button>

            <Button

                variant="contained"

                startIcon={<SaveOutlinedIcon />}

                className="save-btn"

                onClick={onSubmit}

                disabled={loading}

            >

                {

                    loading

                        ?

                        "Saving..."

                        :

                        submitText

                }

            </Button>

        </Box>

    );

}