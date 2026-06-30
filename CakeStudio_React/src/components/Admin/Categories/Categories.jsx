import { Box } from "@mui/material";
import { useState } from "react";

import CategoryHeader from "./CategoryHeader";
import CategoryFilters from "./CategoryFilters";
import CategoryTable from "./CategoryTable";
import EmptyCategories from "./EmptyCategories";
import AddEditCategoryDialog from "./AddEditCategoryDialog";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

import "./Categories.css";

export default function Categories() {

    const [categories, setCategories] = useState([

        {
            id: 1,
            name: "Chocolate",
            description: "Rich and creamy chocolate cakes.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200",
            products: 18,
            status: "Active",
            createdOn: "12 Jun 2026"
        },

        {
            id: 2,
            name: "Red Velvet",
            description: "Premium red velvet cakes.",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200",
            products: 9,
            status: "Active",
            createdOn: "18 Jun 2026"
        },

        {
            id: 3,
            name: "Fruit Cakes",
            description: "Fresh fruit based cakes.",
            image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200",
            products: 6,
            status: "Inactive",
            createdOn: "20 Jun 2026"
        }

    ]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All");

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [openDialog, setOpenDialog] = useState(false);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const filteredCategories = categories.filter(category => {

        const searchMatch =

            category.name.toLowerCase().includes(search.toLowerCase());

        const statusMatch =

            status === "All" ||

            category.status === status;

        return searchMatch && statusMatch;

    });

    const handleAdd = () => {

        setSelectedCategory(null);

        setOpenDialog(true);

    };

    const handleEdit = (category) => {

        setSelectedCategory(category);

        setOpenDialog(true);

    };

    const handleDelete = (category) => {

        setSelectedCategory(category);

        setOpenDeleteDialog(true);

    };

    return (

        <Box className="categories-page">

            <CategoryHeader

                onAdd={handleAdd}

            />

            <CategoryFilters

                search={search}

                setSearch={setSearch}

                status={status}

                setStatus={setStatus}

            />

            {

                filteredCategories.length === 0 ?

                    <EmptyCategories />

                    :

                    <CategoryTable

                        categories={filteredCategories}

                        onEdit={handleEdit}

                        onDelete={handleDelete}

                    />

            }

            <AddEditCategoryDialog

                open={openDialog}

                category={selectedCategory}

                onClose={() => setOpenDialog(false)}

                onSave={(category) => {

                    console.log(category);

                }}

            />

            <DeleteCategoryDialog

                open={openDeleteDialog}

                category={selectedCategory}

                onClose={() => setOpenDeleteDialog(false)}

                onConfirm={() => {

                    console.log(selectedCategory);

                }}

            />

        </Box>

    );

}