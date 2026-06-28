import {
    Checkbox,
    FormControlLabel,
    Box,
    Typography
} from "@mui/material";

const CategoryFilter = ({
    categories,
    selectedCategories,
    onChange
}) => {

    return (

        <>

            {categories.map(category => (

                <Box
                    key={category.id}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >

                    <FormControlLabel

                        control={
                            <Checkbox
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => onChange(category.id)}
                                size="small"
                            />
                        }

                        label={category.name}

                    />

                    <Typography
                        sx={{
                            color: "#777",
                            mt: 1
                        }}
                    >
                        ({category.count})
                    </Typography>

                </Box>

            ))}

        </>

    );

};

export default CategoryFilter;