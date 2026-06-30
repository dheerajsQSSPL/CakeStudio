import {
    Box,
    Switch,
    Typography
} from "@mui/material";

import "./UserStatusSwitch.css";

export default function UserStatusSwitch({

    checked,

    onChange

}) {

    return (

        <Box className="user-status-container">

            <Switch

                checked={checked}

                onChange={(e) =>

                    onChange(e.target.checked)

                }

                color="success"

            />

            <Typography

                className={

                    checked

                        ?

                        "status-active"

                        :

                        "status-inactive"

                }

            >

                {

                    checked

                        ?

                        "Active"

                        :

                        "Inactive"

                }

            </Typography>

        </Box>

    );

}