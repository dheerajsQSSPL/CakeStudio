import {
    Box,
    Button,
    InputAdornment,
    MenuItem,
    TextField
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

import "./CategoryFilters.css";

export default function CategoryFilters({

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

        <Box className="category-filters">

            <TextField

                size="small"

                placeholder="Search Category"

                value={search}

                onChange={(e) =>

                    setSearch(e.target.value)

                }

                className="category-search"

                InputProps={{

                    startAdornment:(

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

                onChange={(e)=>

                    setStatus(e.target.value)

                }

                className="category-status"

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

                className="reset-category-btn"

                onClick={handleReset}

            >

                Reset

            </Button>

        </Box>

    );

}