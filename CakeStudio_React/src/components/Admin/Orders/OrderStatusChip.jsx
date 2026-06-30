import { Chip } from "@mui/material";

export default function OrderStatusChip({

    status

}) {

    const getStyles = () => {

        switch (status) {

            case "Pending":

                return {

                    background: "#fff8e8",

                    color: "#f57c00"

                };

            case "Confirmed":

                return {

                    background: "#e8f1ff",

                    color: "#1565c0"

                };

            case "Processing":

                return {

                    background: "#f3edff",

                    color: "#7b4dff"

                };

            case "Out for Delivery":

                return {

                    background: "#fff4e6",

                    color: "#ef6c00"

                };

            case "Delivered":

                return {

                    background: "#e8f8ef",

                    color: "#2e7d32"

                };

            case "Cancelled":

                return {

                    background: "#fdeaea",

                    color: "#d32f2f"

                };

            default:

                return {

                    background: "#f5f5f5",

                    color: "#666"

                };

        }

    };

    const style = getStyles();

    return (

        <Chip

            label={status}

            size="small"

            sx={{

                background: style.background,

                color: style.color,

                fontWeight: 600,

                minWidth: 130

            }}

        />

    );

}