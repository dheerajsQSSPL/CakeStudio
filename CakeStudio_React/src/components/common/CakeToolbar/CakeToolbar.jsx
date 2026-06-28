import {
    Box,
    FormControl,
    MenuItem,
    Select,
    Typography,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";

import "./CakeToolbar.css";

const CakeToolbar = ({
    title,
    totalItems,
    sortBy,
    onSortChange,
    showCount,
    onShowCountChange,
    view,
    onViewChange
}) => {

    return (

        <Box className="cake-toolbar">

            <Box>

                <Typography className="cake-toolbar-title">
                    {title}
                </Typography>

                <Typography className="cake-toolbar-subtitle">
                    Showing 1–{showCount} of {totalItems} cakes
                </Typography>

            </Box>

            <Box className="cake-toolbar-actions">

                <FormControl size="small">

                    <Select
                        value={sortBy}
                        onChange={onSortChange}
                    >

                        <MenuItem value="popular">
                            Popular
                        </MenuItem>

                        <MenuItem value="priceLow">
                            Price: Low to High
                        </MenuItem>

                        <MenuItem value="priceHigh">
                            Price: High to Low
                        </MenuItem>

                        <MenuItem value="rating">
                            Rating
                        </MenuItem>

                        <MenuItem value="latest">
                            Latest
                        </MenuItem>

                    </Select>

                </FormControl>

                <FormControl size="small">

                    <Select
                        value={showCount}
                        onChange={onShowCountChange}
                    >

                        <MenuItem value={12}>12</MenuItem>

                        <MenuItem value={24}>24</MenuItem>

                        <MenuItem value={48}>48</MenuItem>

                    </Select>

                </FormControl>

                <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={onViewChange}
                >

                    <ToggleButton value="grid">
                        <GridViewOutlinedIcon />
                    </ToggleButton>

                    <ToggleButton value="list">
                        <ViewListOutlinedIcon />
                    </ToggleButton>

                </ToggleButtonGroup>

            </Box>

        </Box>

    );

};

export default CakeToolbar;