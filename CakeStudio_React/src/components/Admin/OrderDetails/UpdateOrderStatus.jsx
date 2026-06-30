import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";

import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

import { useState } from "react";

import "./UpdateOrderStatus.css";

export default function UpdateOrderStatus({ order }) {

    const [status, setStatus] = useState(order.orderStatus);

    const [notes, setNotes] = useState("");

    const handleUpdate = () => {

        console.log({

            orderId: order.orderId,

            status,

            notes

        });

    };

    return (

        <Card className="update-status-card">

            <CardContent>

                <Typography className="update-status-title">

                    Update Order Status

                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Box className="update-status-form">

                    <TextField

                        select

                        fullWidth

                        label="Order Status"

                        value={status}

                        onChange={(e) =>

                            setStatus(e.target.value)

                        }

                    >

                        <MenuItem value="Pending">

                            Pending

                        </MenuItem>

                        <MenuItem value="Confirmed">

                            Confirmed

                        </MenuItem>

                        <MenuItem value="Processing">

                            Processing

                        </MenuItem>

                        <MenuItem value="Out for Delivery">

                            Out for Delivery

                        </MenuItem>

                        <MenuItem value="Delivered">

                            Delivered

                        </MenuItem>

                        <MenuItem value="Cancelled">

                            Cancelled

                        </MenuItem>

                    </TextField>

                    <TextField

                        fullWidth

                        multiline

                        rows={4}

                        label="Admin Notes (Optional)"

                        value={notes}

                        onChange={(e) =>

                            setNotes(e.target.value)

                        }

                        placeholder="Example: Customer requested evening delivery."

                    />

                    <Button

                        variant="contained"

                        startIcon={<UpdateOutlinedIcon />}

                        className="update-order-btn"

                        onClick={handleUpdate}

                    >

                        Update Status

                    </Button>

                </Box>

            </CardContent>

        </Card>

    );

}