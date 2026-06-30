import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";

import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import { useState } from "react";

import ImageUpload from "./ImageUpload";

import "./CakeForm.css";
import FormActions from "./FormActions";

export default function CakeForm({
    initialValues,
    isEdit = false
}) {

    const [cake, setCake] = useState(

        initialValues || {

            name: "",

            description: "",

            category: "",

            price: "",

            image: null

        }

    );

    const categories = [

        "Chocolate",

        "Red Velvet",

        "Butterscotch",

        "Fruit",

        "Vanilla",

        "Black Forest"

    ];

    const handleChange = (event) => {

        setCake({

            ...cake,

            [event.target.name]: event.target.value

        });

    };

    const handleImageChange = (file) => {

        setCake({

            ...cake,

            image: file

        });

    };

    const handleSubmit = () => {

        if (isEdit) {

            console.log("Update Cake", cake);

        }

        else {

            console.log("Create Cake", cake);

        }

    };

    return (

        <Card className="cake-form-card">

            <CardContent>

                <Box className="cake-form-header">

                    <Box className="cake-form-icon">

                        <BakeryDiningOutlinedIcon />

                    </Box>

                    <Box>

                        <Typography className="cake-form-title">

                            {

                                isEdit

                                    ?

                                    "Edit Cake"

                                    :

                                    "Add New Cake"

                            }

                        </Typography>

                        <Typography className="cake-form-subtitle">

                            {

                                isEdit

                                    ?

                                    "Update the cake information."

                                    :

                                    "Fill in the details to add a new cake."

                            }

                        </Typography>
                    </Box>

                </Box>

                <Grid
                    container
                    spacing={3}
                    sx={{ mt: 1 }}
                >

                    <Grid size={{ xs: 12, md: 6 }}>

                        <TextField

                            fullWidth

                            label="Cake Name"

                            name="name"

                            value={cake.name}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <TextField

                            fullWidth

                            label="Price (₹)"

                            name="price"

                            type="number"

                            value={cake.price}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid size={12}>

                        <TextField

                            fullWidth

                            multiline

                            rows={5}

                            label="Description"

                            name="description"

                            value={cake.description}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid size={12}>

                        <TextField

                            select

                            fullWidth

                            label="Category"

                            name="category"

                            value={cake.category}

                            onChange={handleChange}

                        >

                            {

                                categories.map(category => (

                                    <MenuItem

                                        key={category}

                                        value={category}

                                    >

                                        {category}

                                    </MenuItem>

                                ))

                            }

                        </TextField>

                    </Grid>

                    <Grid size={12}>

                        <ImageUpload

                            image={cake.image}

                            onImageChange={handleImageChange}

                        />

                    </Grid>

                    <Grid size={12}>

                        {/* <Button

                            variant="contained"

                            startIcon={<SaveOutlinedIcon />}

                            className="save-cake-btn"

                            onClick={handleSubmit}

                        >

                            Save Cake

                        </Button> */}

                        <FormActions

                            submitText={

                                isEdit

                                    ?

                                    "Update Cake"

                                    :

                                    "Save Cake"

                            }

                            onSubmit={handleSubmit}

                        />

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

}