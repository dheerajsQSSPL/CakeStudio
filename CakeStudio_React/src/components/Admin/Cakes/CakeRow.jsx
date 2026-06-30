import {
    Avatar,
    Button,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useNavigate } from "react-router-dom";

import "./CakeRow.css";

export default function CakeRow({

    cake,

    onDelete

}) {

    const navigate = useNavigate();

    return (

        <TableRow hover>

            <TableCell>

                <Avatar

                    src={cake.image}

                    variant="rounded"

                    className="cake-avatar"

                />

            </TableCell>

            <TableCell>

                <Typography className="cake-name">

                    {cake.name}

                </Typography>

            </TableCell>

            <TableCell>

                <Typography className="cake-price">

                    ₹{cake.price}

                </Typography>

            </TableCell>

            <TableCell>

                <Typography className="cake-category">

                    {cake.category}

                </Typography>

            </TableCell>

            <TableCell align="center">

                <Button

                    variant="outlined"

                    startIcon={<EditOutlinedIcon />}

                    className="edit-btn"

                    onClick={() =>

                        navigate(`/admin/cakes/edit/${cake.id}`)

                    }

                >

                    Edit

                </Button>

            </TableCell>

            <TableCell align="center">

                <Button

                    variant="outlined"

                    color="error"

                    startIcon={<DeleteOutlineOutlinedIcon />}

                    className="delete-btn"

                    onClick={() => onDelete(cake)}

                >

                    Delete

                </Button>

            </TableCell>

        </TableRow>

    );

}