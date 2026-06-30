import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

import CakeRow from "./CakeRow";
import EmptyCakes from "./EmptyCakes";

import "./CakeTable.css";

export default function CakeTable({

    cakes,

    onDelete

}) {

    if (!cakes || cakes.length === 0) {

        return <EmptyCakes />;

    }

    return (

        <TableContainer

            component={Paper}

            className="cake-table"

        >

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Image</TableCell>

                        <TableCell>Name</TableCell>

                        <TableCell>Price</TableCell>

                        <TableCell>Category</TableCell>

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

                        cakes.map(cake => (

                            <CakeRow

                                key={cake.id}

                                cake={cake}

                                onDelete={onDelete}

                            />

                        ))

                    }

                </TableBody>

            </Table>

        </TableContainer>

    );

}