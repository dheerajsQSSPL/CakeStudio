import {
    Avatar,
    Box,
    IconButton,
    TableCell,
    TableRow,
    Tooltip,
    Typography
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import CategoryStatusChip from "./CategoryStatusChip";

import "./CategoryRow.css";

export default function CategoryRow({

    category,

    onEdit,

    onDelete

}) {

    return (

        <TableRow hover>

            <TableCell>

                <Box className="category-info">

                    <Avatar

                        src={category.image}

                        variant="rounded"

                        className="category-avatar"

                    />

                    <Box>

                        <Typography className="category-name">

                            {category.name}

                        </Typography>

                        <Typography className="category-description">

                            {category.description}

                        </Typography>

                    </Box>

                </Box>

            </TableCell>

            <TableCell align="center">

                <Typography className="product-count">

                    {category.products}

                </Typography>

            </TableCell>

            <TableCell align="center">

                <CategoryStatusChip

                    status={category.status}

                />

            </TableCell>

            <TableCell>

                {category.createdOn}

            </TableCell>

            <TableCell align="center">

                <Tooltip title="Edit Category">

                    <IconButton

                        className="edit-btn"

                        onClick={() => onEdit(category)}

                    >

                        <EditOutlinedIcon />

                    </IconButton>

                </Tooltip>

            </TableCell>

            <TableCell align="center">

                <Tooltip title="Delete Category">

                    <IconButton

                        className="delete-btn"

                        onClick={() => onDelete(category)}

                    >

                        <DeleteOutlineOutlinedIcon />

                    </IconButton>

                </Tooltip>

            </TableCell>

        </TableRow>

    );

}