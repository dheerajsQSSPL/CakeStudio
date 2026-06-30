import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    TextField,
    Typography
} from "@mui/material";

import { useState } from "react";

import "./AdminProfile.css";

export default function AdminProfile() {

    const [profile, setProfile] = useState({

        fullName: "Admin",

        email: "admin@cakestudio.com",

        phone: "+91 9876543210",

        role: "Administrator"

    });

    const handleChange = (event) => {

        setProfile({

            ...profile,

            [event.target.name]: event.target.value

        });

    };

    const handleSave = () => {

        console.log(profile);

    };

    return (

        <Box className="admin-profile-page">

            <Typography className="profile-title">

                My Profile

            </Typography>

            <Typography className="profile-subtitle">

                Manage your account information.

            </Typography>

            <Card className="profile-card">

                <CardContent>

                    <Box className="profile-header">

                        <Avatar className="profile-avatar">

                            A

                        </Avatar>

                        <Box>

                            <Typography className="profile-name">

                                {profile.fullName}

                            </Typography>

                            <Typography className="profile-role">

                                {profile.role}

                            </Typography>

                        </Box>

                    </Box>

                    <Divider sx={{ my: 4 }} />

                    <Grid

                        container

                        spacing={3}

                    >

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Full Name"

                                name="fullName"

                                value={profile.fullName}

                                onChange={handleChange}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Email"

                                name="email"

                                value={profile.email}

                                onChange={handleChange}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Phone"

                                name="phone"

                                value={profile.phone}

                                onChange={handleChange}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Role"

                                value={profile.role}

                                disabled

                            />

                        </Grid>

                    </Grid>

                    <Box className="profile-actions">

                        <Button

                            variant="contained"

                            className="profile-save-btn"

                            onClick={handleSave}

                        >

                            Save Changes

                        </Button>

                    </Box>

                </CardContent>

            </Card>

        </Box>

    );

}