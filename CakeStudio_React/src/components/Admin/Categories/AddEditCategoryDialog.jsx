import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import { useEffect, useRef, useState } from "react";

import "./AddEditCategoryDialog.css";

export default function AddEditCategoryDialog({

    open,

    onClose,

    category,

    onSave

}) {

    const fileInputRef = useRef();

    const [formData, setFormData] = useState({

        name: "",

        description: "",

        status: "Active",

        image: null

    });

    useEffect(() => {

        if (category) {

            setFormData({

                name: category.name,

                description: category.description,

                status: category.status,

                image: category.image

            });

        }

        else {

            setFormData({

                name: "",

                description: "",

                status: "Active",

                image: null

            });

        }

    }, [category, open]);

    const handleChange = (event) => {

        setFormData({

            ...formData,

            [event.target.name]: event.target.value

        });

    };

    const handleImageChange = (event) => {

        const file = event.target.files[0];

        if (!file) return;

        setFormData({

            ...formData,

            image: file

        });

    };

    const handleSave = () => {

        onSave(formData);

        onClose();

    };

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="sm"

            fullWidth

        >

            <DialogTitle>

                {

                    category

                        ?

                        "Edit Category"

                        :

                        "Add Category"

                }

            </DialogTitle>

            <DialogContent>

                <Box className="category-dialog-content">

                    <TextField

                        fullWidth

                        label="Category Name"

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                    />

                    <TextField

                        fullWidth

                        multiline

                        rows={4}

                        label="Description"

                        name="description"

                        value={formData.description}

                        onChange={handleChange}

                    />

                    <FormControl fullWidth>

                        <InputLabel>

                            Status

                        </InputLabel>

                        <Select

                            label="Status"

                            name="status"

                            value={formData.status}

                            onChange={handleChange}

                        >

                            <MenuItem value="Active">

                                Active

                            </MenuItem>

                            <MenuItem value="Inactive">

                                Inactive

                            </MenuItem>

                        </Select>

                    </FormControl>

                    <Box className="image-upload-section">

                        <Button

                            variant="outlined"

                            startIcon={<CloudUploadOutlinedIcon />}

                            onClick={() =>

                                fileInputRef.current.click()

                            }

                        >

                            Upload Image

                        </Button>

                        <input

                            hidden

                            type="file"

                            accept="image/*"

                            ref={fileInputRef}

                            onChange={handleImageChange}

                        />

                        {

                            formData.image &&

                            <Box className="preview-wrapper">

                                <img

                                    src={

                                        typeof formData.image === "string"

                                            ?

                                            formData.image

                                            :

                                            URL.createObjectURL(formData.image)

                                    }

                                    alt="Category"

                                    className="category-preview"

                                />

                                <Typography

                                    className="preview-name"

                                >

                                    {

                                        typeof formData.image === "string"

                                            ?

                                            "Current Image"

                                            :

                                            formData.image.name

                                    }

                                </Typography>

                            </Box>

                        }

                    </Box>

                </Box>

            </DialogContent>

            <DialogActions>

                <Button

                    onClick={onClose}

                >

                    Cancel

                </Button>

                <Button

                    variant="contained"

                    className="save-category-btn"

                    onClick={handleSave}

                >

                    {

                        category

                            ?

                            "Update"

                            :

                            "Save"

                    }

                </Button>

            </DialogActions>

        </Dialog>

    );

}