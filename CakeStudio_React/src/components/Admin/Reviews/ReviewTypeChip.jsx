import { Chip } from "@mui/material";

export default function ReviewTypeChip({

    type

}) {

    const getStyle = () => {

        switch (type) {

            case "Review":

                return {

                    background: "#ede9fe",

                    color: "#6d28d9"

                };

            case "Complaint":

                return {

                    background: "#fff4e5",

                    color: "#f57c00"

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

            label={type}

            size="small"

            sx={{

                minWidth:100,

                fontWeight:600,

                background:style.background,

                color:style.color

            }}

        />

    );

}