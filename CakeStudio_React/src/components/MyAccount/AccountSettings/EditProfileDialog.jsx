import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    MenuItem,
    TextField
} from "@mui/material";

import { useEffect, useState } from "react";

const initialProfile = {

    fullName: "",

    email: "",

    mobile: "",

    dob: "",

    gender: ""

};

export default function EditProfileDialog({

    open,

    onClose,

    profile,

    onSave

}) {

    const [formData, setFormData] = useState(initialProfile);

    useEffect(() => {

        if (profile) {

            setFormData(profile);

        }

        else {

            setFormData(initialProfile);

        }

    }, [profile, open]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value

        }));

    };

    const handleSave = () => {

        console.log(formData);

        onSave?.(formData);

        onClose();

    };

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="sm"

        >

            <DialogTitle>

                Edit Profile

            </DialogTitle>

            <DialogContent dividers>

                <Grid
                    container
                    spacing={3}
                >

                    <Grid size={{ xs: 12 }}>

                        <TextField

                            fullWidth

                            label="Full Name"

                            name="fullName"

                            value={formData.fullName}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <TextField

                            fullWidth

                            label="Email"

                            name="email"

                            value={formData.email}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <TextField

                            fullWidth

                            label="Mobile Number"

                            name="mobile"

                            value={formData.mobile}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <TextField

                            fullWidth

                            type="date"

                            name="dob"

                            label="Date of Birth"

                            value={formData.dob}

                            onChange={handleChange}

                            InputLabelProps={{
                                shrink: true
                            }}

                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <TextField

                            fullWidth

                            select

                            label="Gender"

                            name="gender"

                            value={formData.gender}

                            onChange={handleChange}

                        >

                            <MenuItem value="Male">

                                Male

                            </MenuItem>

                            <MenuItem value="Female">

                                Female

                            </MenuItem>

                            <MenuItem value="Other">

                                Other

                            </MenuItem>

                        </TextField>

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions sx={{ p: 2 }}>

                <Button

                    onClick={onClose}

                >

                    Cancel

                </Button>

                <Button

                    variant="contained"

                    onClick={handleSave}

                    sx={{
                        background: "#ff5b84",
                        "&:hover": {
                            background: "#ec4f79"
                        }
                    }}

                >

                    Save Changes

                </Button>

            </DialogActions>

        </Dialog>

    );

}