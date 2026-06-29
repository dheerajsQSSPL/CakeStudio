import {
    Box,
    Button,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";

import "../../Cart/cart.css"

const CartTable = ({

    cartItems,

    onIncrease,

    onDecrease,

    onRemove

}) => {

    const navigate = useNavigate();

    return (

        <TableContainer
            className="cart-table"
        >

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>PRODUCT</TableCell>

                        <TableCell>NAME</TableCell>

                        <TableCell align="center">
                            QUANTITY
                        </TableCell>

                        <TableCell align="center">
                            PRICE
                        </TableCell>

                        <TableCell align="center">
                            TOTAL
                        </TableCell>

                        <TableCell align="center">
                            REMOVE
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        cartItems.map(item => (

                            <CartItem

                                key={item.id}

                                item={item}

                                onIncrease={onIncrease}

                                onDecrease={onDecrease}

                                onRemove={onRemove}

                            />

                        ))

                    }

                    <TableRow>

                        <TableCell
                            colSpan={6}
                            sx={{
                                borderBottom: "none",
                                py: 3
                            }}
                        >

                            <Divider
                                sx={{ mb: 3 }}
                            />

                            <Button

                                variant="outlined"

                                startIcon={
                                    <ArrowBackOutlinedIcon />
                                }

                                onClick={() =>
                                    navigate("/cakes")
                                }

                            >

                                Continue Shopping

                            </Button>

                        </TableCell>

                    </TableRow>

                </TableBody>

            </Table>

        </TableContainer>

    );

};

export default CartTable;