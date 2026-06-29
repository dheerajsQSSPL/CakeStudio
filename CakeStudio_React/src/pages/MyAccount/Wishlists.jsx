import MyAccountLayout from "../../components/MyAccount/MyAccountLayout"
import Wishlist from "../../components/MyAccount/Wishlist/Wishlist"
export default function Wishlists(props) {
    return (
        <>
            <MyAccountLayout>
                <Wishlist {...props}/>
            </MyAccountLayout>
        </>
    )
}