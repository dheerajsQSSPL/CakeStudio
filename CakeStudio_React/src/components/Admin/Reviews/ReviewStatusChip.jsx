import { Chip } from "@mui/material";

export default function ReviewStatusChip({

    status

}) {

    const getStyle = () => {

        switch (status) {

            case "New":

                return {

                    background: "#e8f1ff",

                    color: "#1565c0"

                };

            case "In Progress":

                return {

                    background: "#fff8e8",

                    color: "#f57c00"

                };

            case "Published":

                return {

                    background: "#e8f8ef",

                    color: "#2e7d32"

                };

            case "Resolved":

                return {

                    background: "#ede9fe",

                    color: "#6d28d9"

                };

            default:

                return {

                    background: "#f5f5f5",

                    color: "#666"

                };

        }

    };

    const style = getStyle();

    return (

        <Chip

            label={status}

            size="small"

            sx={{

                minWidth:110,

                fontWeight:600,

                background:style.background,

                color:style.color

            }}

        />

    );

}