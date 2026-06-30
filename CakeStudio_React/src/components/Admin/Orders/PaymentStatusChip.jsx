import { Chip } from "@mui/material";

export default function PaymentStatusChip({

    status

}) {

    const getStyles = () => {

        switch (status) {

            case "Paid":

                return {

                    background: "#e8f8ef",

                    color: "#2e7d32"

                };

            case "Pending":

                return {

                    background: "#fff8e8",

                    color: "#f57c00"

                };

            case "Failed":

                return {

                    background: "#fdeaea",

                    color: "#d32f2f"

                };

            case "Refunded":

                return {

                    background: "#f2edff",

                    color: "#6a1b9a"

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

                minWidth: 90

            }}

        />

    );

}