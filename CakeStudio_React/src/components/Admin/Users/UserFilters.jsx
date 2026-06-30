import {
    Box,
    Button,
    InputAdornment,
    MenuItem,
    TextField
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

import "./UserFilters.css";

export default function UserFilters({

    search,
    setSearch,

    status,
    setStatus

}) {

    const handleReset = () => {

        setSearch("");

        setStatus("All");

    };

    return (

        <Box className="user-filters">

            <TextField

                size="small"

                placeholder="Search Name, Email or Mobile"

                value={search}

                onChange={(e) =>

                    setSearch(e.target.value)

                }

                className="user-search"

                InputProps={{

                    startAdornment: (

                        <InputAdornment position="start">

                            <SearchOutlinedIcon color="action" />

                        </InputAdornment>

                    )

                }}

            />

            <TextField

                select

                size="small"

                value={status}

                onChange={(e) =>

                    setStatus(e.target.value)

                }

                className="user-status"

            >

                <MenuItem value="All">

                    All Status

                </MenuItem>

                <MenuItem value="Active">

                    Active

                </MenuItem>

                <MenuItem value="Inactive">

                    Inactive

                </MenuItem>

            </TextField>

            <Button

                variant="outlined"

                startIcon={<RestartAltOutlinedIcon />}

                className="reset-user-btn"

                onClick={handleReset}

            >

                Reset

            </Button>

        </Box>

    );

}