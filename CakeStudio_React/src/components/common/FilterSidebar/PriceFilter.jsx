import {
    Box,
    Slider,
    Typography
} from "@mui/material";

const PriceFilter = ({
    value,
    onChange
}) => {

    return (

        <>

            <Typography
                mb={2}
            >
                ₹{value[0]} - ₹{value[1]}
            </Typography>

            <Slider
                value={value}
                min={100}
                max={5000}
                onChange={onChange}
                color="secondary"
            />

        </>

    );

};

export default PriceFilter;