import {
    Box,
    IconButton,
    Typography
} from "@mui/material";

import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import "./QuantitySelector.css";


const QuantitySelector = ({

    value,

    min = 1,

    max = 20,

    onChange,
    compact = false

}) => {

    const decrease = () => {

        if (value > min) {

            onChange(value - 1);

        }

    };

    const increase = () => {

        if (value < max) {

            onChange(value + 1);

        }

    };



    return (

        <Box className="quantity-section">

            <Typography className="quantity-label">

                Quantity

            </Typography>

            <Box

                className={`quantity-container ${compact ? "compact" : ""}`}

            >

                <IconButton

                    className="quantity-btn"

                    onClick={decrease}

                >

                    <RemoveOutlinedIcon />

                </IconButton>

                <Typography className="quantity-value">

                    {value}

                </Typography>

                <IconButton

                    className="quantity-btn"

                    onClick={increase}

                >

                    <AddOutlinedIcon />

                </IconButton>

            </Box>

        </Box>

    );

};

export default QuantitySelector;