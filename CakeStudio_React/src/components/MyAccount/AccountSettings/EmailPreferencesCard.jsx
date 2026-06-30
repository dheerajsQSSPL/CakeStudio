import {
    Box,
    Card,
    CardContent,
    Divider,
    FormControlLabel,
    Switch,
    Typography
} from "@mui/material";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import "./EmailPreferencesCard.css";

export default function EmailPreferencesCard({

    preferences,

    setPreferences

}) {

    const handleChange = (event) => {

        const { name, checked } = event.target;

        setPreferences(prev => ({

            ...prev,

            [name]: checked

        }));

    };

    return (

        <Card className="preferences-card">

            <CardContent>

                <Box className="preferences-header">

                    <NotificationsOutlinedIcon />

                    <Box>

                        <Typography className="preferences-title">

                            Email Preferences

                        </Typography>

                        <Typography className="preferences-subtitle">

                            Choose which notifications you'd like to receive.

                        </Typography>

                    </Box>

                </Box>

                <Divider sx={{ my: 3 }} />

                <Box className="preference-row">

                    <Box>

                        <Typography className="preference-title">

                            Order Updates

                        </Typography>

                        <Typography className="preference-description">

                            Receive order confirmations, dispatch and delivery updates.

                        </Typography>

                    </Box>

                    <FormControlLabel

                        control={

                            <Switch

                                checked={preferences.orderUpdates}

                                name="orderUpdates"

                                onChange={handleChange}

                            />

                        }

                    />

                </Box>

                <Divider />

                <Box className="preference-row">

                    <Box>

                        <Typography className="preference-title">

                            Promotional Offers

                        </Typography>

                        <Typography className="preference-description">

                            Receive discount coupons and special offers.

                        </Typography>

                    </Box>

                    <FormControlLabel

                        control={

                            <Switch

                                checked={preferences.promotions}

                                name="promotions"

                                onChange={handleChange}

                            />

                        }

                    />

                </Box>

                <Divider />

                <Box className="preference-row">

                    <Box>

                        <Typography className="preference-title">

                            New Arrivals

                        </Typography>

                        <Typography className="preference-description">

                            Get notified whenever new cakes are added.

                        </Typography>

                    </Box>

                    <FormControlLabel

                        control={

                            <Switch

                                checked={preferences.newArrivals}

                                name="newArrivals"

                                onChange={handleChange}

                            />

                        }

                    />

                </Box>

                <Divider />

                <Box className="preference-row">

                    <Box>

                        <Typography className="preference-title">

                            Newsletter

                        </Typography>

                        <Typography className="preference-description">

                            Receive monthly CakeStudio newsletters.

                        </Typography>

                    </Box>

                    <FormControlLabel

                        control={

                            <Switch

                                checked={preferences.newsletter}

                                name="newsletter"

                                onChange={handleChange}

                            />

                        }

                    />

                </Box>

            </CardContent>

        </Card>

    );

}