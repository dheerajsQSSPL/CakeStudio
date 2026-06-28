import {
    Box,
    Checkbox,
    FormControlLabel,
    Rating,
    Typography
} from "@mui/material";

const RatingFilter = ({
    ratings,
    selectedRatings,
    onChange
}) => {

    return (

        <>

            {ratings.map(rating => (

                <Box
                    key={rating.value}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >

                    <FormControlLabel

                        control={
                            <Checkbox
                                checked={selectedRatings.includes(rating.value)}
                                onChange={() => onChange(rating.value)}
                                size="small"
                            />
                        }

                        label={
                            <Rating
                                value={rating.value}
                                readOnly
                                size="small"
                            />
                        }

                    />

                    <Typography
                        sx={{
                            color: "#777",
                            mt: 1
                        }}
                    >
                        ({rating.count})
                    </Typography>

                </Box>

            ))}

        </>

    );

};

export default RatingFilter;