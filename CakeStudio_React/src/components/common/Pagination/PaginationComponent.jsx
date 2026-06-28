import { Box, Pagination, Typography } from "@mui/material";
import "./PaginationComponent.css";

const PaginationComponent = ({
    page,
    totalPages,
    onPageChange,
    totalItems,
    currentItems
}) => {

    return (

        <Box className="pagination-container">

            <Typography className="pagination-text">
                Showing {currentItems} of {totalItems} cakes
            </Typography>

            <Pagination
                page={page}
                count={totalPages}
                color="secondary"
                shape="rounded"
                onChange={onPageChange}
                className="pagination"
            />

        </Box>

    );

};

export default PaginationComponent;