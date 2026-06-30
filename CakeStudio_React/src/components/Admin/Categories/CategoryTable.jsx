import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";

import { useState } from "react";

import CategoryRow from "./CategoryRow";

import "./CategoryTable.css";

export default function CategoryTable({

    categories,

    onEdit,

    onDelete

}) {

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {

        setPage(newPage);

    };

    const handleChangeRowsPerPage = (event) => {

        setRowsPerPage(parseInt(event.target.value, 10));

        setPage(0);

    };

    return (

        <Paper className="category-table-card">

            <TableContainer>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>

                                Category

                            </TableCell>

                            <TableCell align="center">

                                Products

                            </TableCell>

                            <TableCell align="center">

                                Status

                            </TableCell>

                            <TableCell>

                                Created On

                            </TableCell>

                            <TableCell align="center">

                                Edit

                            </TableCell>

                            <TableCell align="center">

                                Delete

                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            categories

                                .slice(

                                    page * rowsPerPage,

                                    page * rowsPerPage + rowsPerPage

                                )

                                .map(category => (

                                    <CategoryRow

                                        key={category.id}

                                        category={category}

                                        onEdit={onEdit}

                                        onDelete={onDelete}

                                    />

                                ))

                        }

                    </TableBody>

                </Table>

            </TableContainer>

            <TablePagination

                component="div"

                count={categories.length}

                page={page}

                rowsPerPage={rowsPerPage}

                rowsPerPageOptions={[5,10,25]}

                onPageChange={handleChangePage}

                onRowsPerPageChange={handleChangeRowsPerPage}

            />

        </Paper>

    );

}