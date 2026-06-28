import { Box } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";

export default function Category(props) {
    const params = useParams()
    const [search] = useSearchParams();
    const category = search.get("category");
    let navigate = useNavigate()
    return (
        <Box>
            <CategoriesComponent
                {...props}
                navigate={navigate}
                id={params.id}
                categoryParams = {category}
            />
        </Box>
    )
}