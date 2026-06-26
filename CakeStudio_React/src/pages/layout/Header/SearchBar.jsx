import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <Paper
            component="form"
            elevation={0}
            className="search-container"
        >
            <InputBase
                className="search-input"
                placeholder="Search for cakes, flavors, categories..."
            />

            <IconButton className="search-btn">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;