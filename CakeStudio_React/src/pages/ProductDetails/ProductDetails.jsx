import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsComponent from "../../components/ProductDetails/ProductDetailsComponent";

export default function ProductDetails(props) {
    const { id } = useParams()
    let navigate = useNavigate()
    return (
        <Box>
            <ProductDetailsComponent
                {...props}
                navigate={navigate}
                id={id}
            />
        </Box>
    )
}