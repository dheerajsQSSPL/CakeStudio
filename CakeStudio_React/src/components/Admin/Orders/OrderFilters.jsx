import {
    Box,
    Button,
    MenuItem,
    TextField
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

import "./OrderFilters.css";

export default function OrderFilters({

    search,
    setSearch,

    paymentStatus,
    setPaymentStatus,

    orderStatus,
    setOrderStatus

}) {

    const resetFilters = () => {

        setSearch("");

        setPaymentStatus("All");

        setOrderStatus("All");

    };

    return (

        <Box className="order-filters">

            <TextField

                size="small"

                placeholder="Search Order ID or Customer"

                value={search}

                onChange={(e) =>

                    setSearch(e.target.value)

                }

                className="search-field"

                slotProps={{

                    input:{

                        startAdornment:<SearchOutlinedIcon sx={{mr:1,color:"#999"}}/>

                    }

                }}

            />

            <TextField

                select

                size="small"

                value={paymentStatus}

                onChange={(e)=>setPaymentStatus(e.target.value)}

                className="filter-select"

            >

                <MenuItem value="All">

                    All Payments

                </MenuItem>

                <MenuItem value="Paid">

                    Paid

                </MenuItem>

                <MenuItem value="Pending">

                    Pending

                </MenuItem>

                <MenuItem value="Failed">

                    Failed

                </MenuItem>

                <MenuItem value="Refunded">

                    Refunded

                </MenuItem>

            </TextField>

            <TextField

                select

                size="small"

                value={orderStatus}

                onChange={(e)=>setOrderStatus(e.target.value)}

                className="filter-select"

            >

                <MenuItem value="All">

                    All Orders

                </MenuItem>

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

            <Button

                variant="outlined"

                startIcon={<RestartAltOutlinedIcon />}

                className="reset-btn"

                onClick={resetFilters}

            >

                Reset

            </Button>

        </Box>

    );

}