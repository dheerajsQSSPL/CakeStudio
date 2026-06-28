import { Box, Button, Typography } from "@mui/material";

import FilterSection from "./FilterSection";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

import {
    categories,
    ratings
} from "../../../constants/filterData";

import "./FilterSidebar.css";

const FilterSidebar = ({

    selectedCategories,
    selectedRatings,
    priceRange,

    onCategoryChange,
    onRatingChange,
    onPriceChange,

    onApply,
    onClear

}) => {

    return (

        <Box className="filter-sidebar">

            <Typography
                className="filter-title"
            >
                Filters
            </Typography>

            <FilterSection title="Category">

                <CategoryFilter
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onChange={onCategoryChange}
                />

            </FilterSection>

            <FilterSection title="Price Range">

                <PriceFilter
                    value={priceRange}
                    onChange={onPriceChange}
                />

            </FilterSection>

            <FilterSection title="Rating">

                <RatingFilter
                    ratings={ratings}
                    selectedRatings={selectedRatings}
                    onChange={onRatingChange}
                />

            </FilterSection>

            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={onApply}
            >
                Apply Filters
            </Button>

            <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={onClear}
            >
                Clear All
            </Button>

        </Box>

    );

};

export default FilterSidebar;