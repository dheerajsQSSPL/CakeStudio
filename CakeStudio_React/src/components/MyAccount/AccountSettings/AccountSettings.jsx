import {
    Box,
    Typography
} from "@mui/material";

import { useState } from "react";

import MyAccountLayout from "../MyAccountLayout";

import ProfileInformationCard from "./ProfileInformationCard";
import PasswordSecurityCard from "./PasswordSecurityCard";
import EmailPreferencesCard from "./EmailPreferencesCard";
import DeleteAccountCard from "./DeleteAccountCard";

import "./AccountSettings.css";
import EditProfileDialog from "./EditProfileDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";
import DeleteAccountDialog from "./DeleteAccountDialog";

export default function AccountSettings() {

    const [profile, setProfile] = useState({

        fullName: "Rahul Sharma",

        email: "rahul.sharma@email.com",

        mobile: "+91 9876543210",

        dob: "15 March 1995",

        emailVerified: true,

        mobileVerified: true

    });

    const [preferences, setPreferences] = useState({

        orderUpdates: true,

        promotions: true,

        newArrivals: true,

        newsletter: false

    });
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    return (

        <Box>

            <Typography className="settings-title">

                Account Settings

            </Typography>

            <Typography className="settings-subtitle">

                Manage your account preferences and security.

            </Typography>

            <ProfileInformationCard

                profile={profile}

                onEdit={() => setOpenEditDialog(true)}

            />

            <EditProfileDialog

                open={openEditDialog}

                onClose={() => setOpenEditDialog(false)}

                profile={profile}

                onSave={(updatedProfile) => {

                    setProfile(updatedProfile);

                    console.log(updatedProfile);

                }}

            />

            <PasswordSecurityCard

                onChangePassword={() => setOpenPasswordDialog(true)}

                onEnable2FA={() => console.log("Enable 2FA")}

                onViewLoginActivity={() => console.log("Login Activity")}

            />

            <ChangePasswordDialog

                open={openPasswordDialog}

                onClose={() => setOpenPasswordDialog(false)}

                onSave={(data) => {

                    console.log(data);

                }}

            />

            <EmailPreferencesCard

                preferences={preferences}

                setPreferences={setPreferences}

            />

            <DeleteAccountCard

                onDelete={() => setOpenDeleteDialog(true)}

            />
            <DeleteAccountDialog

                open={openDeleteDialog}

                onClose={() => setOpenDeleteDialog(false)}

                onDelete={() => {

                    console.log("Account Deleted");

                }}

            />

        </Box>

    );

}