import { Chip } from "@mui/material";

export default function CategoryStatusChip({

    status

}) {

    const getStyle = () => {

        switch (status) {

            case "Active":

                return {

                    background: "#e8f8ef",

                    color: "#2e7d32"

                };

            case "Inactive":

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

    const style = getStyle();

    return (

        <Chip

            label={status}

            size="small"

            sx={{

                minWidth:90,

                fontWeight:600,

                background:style.background,

                color:style.color

            }}

        />

    );

}