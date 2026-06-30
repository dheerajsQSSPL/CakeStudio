import {
    Box,
    Card,
    CardContent,
    Divider,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
    Typography,
    Button
} from "@mui/material";

import { useState } from "react";

import "./Settings.css";

export default function Settings() {

    const [settings, setSettings] = useState({

        bakeryName: "CakeStudio",

        supportEmail: "support@cakestudio.com",

        supportPhone: "+91 9876543210",

        maintenanceMode: false,

        emailNotifications: true

    });

    const handleChange = (event) => {

        const { name, value, checked, type } = event.target;

        setSettings({

            ...settings,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleSave = () => {

        console.log(settings);

    };

    return (

        <Box className="settings-page">

            <Typography className="settings-page-title">

                Settings

            </Typography>

            <Typography className="settings-page-subtitle">

                Manage basic application settings.

            </Typography>

            <Card className="settings-card">

                <CardContent>

                    <Grid

                        container

                        spacing={3}

                    >

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Bakery Name"

                                name="bakeryName"

                                value={settings.bakeryName}

                                onChange={handleChange}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Support Email"

                                name="supportEmail"

                                value={settings.supportEmail}

                                onChange={handleChange}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Support Phone"

                                name="supportPhone"

                                value={settings.supportPhone}

                                onChange={handleChange}

                            />

                        </Grid>

                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Box className="settings-switches">

                        <FormControlLabel

                            control={

                                <Switch

                                    checked={settings.emailNotifications}

                                    onChange={handleChange}

                                    name="emailNotifications"

                                />

                            }

                            label="Enable Email Notifications"

                        />

                        <FormControlLabel

                            control={

                                <Switch

                                    checked={settings.maintenanceMode}

                                    onChange={handleChange}

                                    name="maintenanceMode"

                                />

                            }

                            label="Maintenance Mode"

                        />

                    </Box>

                    <Box className="settings-actions">

                        <Button

                            variant="contained"

                            className="save-settings-btn"

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