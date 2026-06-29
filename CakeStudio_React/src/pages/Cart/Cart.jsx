import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartComponent from "../../components/Cart/CartComponent";

export default function Cart(props){
   const navigate = useNavigate();
   return(
    <Box>
        <CartComponent 
        {...props}
        navigate={navigate}
        />
    </Box>
   )
}