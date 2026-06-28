import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import Breadcrumb from "../common/Breadcrumb/Breadcrumb";
import CakeToolbar from "../common/CakeToolbar/CakeToolbar";
import CakeGrid from "../common/CakeGrid/CakeGrid";
import PaginationComponent from "../common/Pagination/PaginationComponent";

import useCakeFilters from "../../hooks/useCakeFilters";

import { cakes } from "../Cakes/cakeData";

export default function OccasionDetail({ slug }) {


    const filtered = cakes.filter(
        cake => cake.occasion?.toLowerCase() === slug.toLowerCase()
    );

    const cake = useCakeFilters(filtered);

    return (

        <Box
            sx={{
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 4 },
                py: 3
            }}
        >

            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Occasions", path: "/occasions" },
                    {
                        label: slug
                            .replace("-", " ")
                            .replace(/\b\w/g, c => c.toUpperCase())
                    }
                ]}
            />

            <CakeToolbar

                title={`${slug
                    .replace("-", " ")
                    .replace(/\b\w/g, c => c.toUpperCase())} Cakes`}

                totalItems={cake.filteredCakes.length}

                sortBy={cake.sortBy}

                showCount={cake.showCount}

                view={cake.view}

                onSortChange={(e) =>
                    cake.setSortBy(e.target.value)
                }

                onShowCountChange={(e) =>
                    cake.setShowCount(Number(e.target.value))
                }

                onViewChange={(e, value) =>
                    value && cake.setView(value)
                }

            />

            <CakeGrid

                cakes={cake.currentCakes}

                view={cake.view}

            />

            <PaginationComponent

                page={cake.page}

                totalPages={cake.totalPages}

                totalItems={cake.filteredCakes.length}

                currentItems={cake.currentCakes.length}

                onPageChange={(e, value) =>
                    cake.setPage(value)
                }

            />

        </Box>

    );

}