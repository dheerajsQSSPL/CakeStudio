import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import AddCakes from "../pages/Admin/Cakes/AddCake/AddCakes";
import Cake from "../pages/Admin/Cakes/Cake";
import EditCakes from "../pages/Admin/Cakes/Edit/EditCakes";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import OrderDetail from "../pages/Admin/OrderDetails/OrderDetail";
import Order from "../pages/Admin/Orders/Order";
import CategoriesComps from "../pages/Admin/Categories/CategoriesComps"
import UserList from "../pages/Admin/Users/UserList"
import ReviewsList from "../pages/Admin/Reviews/ReviewsList";
import OffersPage from "../pages/Admin/Offers/OffersPage";
import Setting from "../pages/Admin/Settings/Setting";
import AdminProfile from "../components/Admin/AdminProfile/AdminProfile";

import AdminNotFound from "../pages/Admin/AdminNotFound/AdminNotFound"

const adminRoutes = [
    { path: '/admin', name: 'AdminHome', component: AdminHome, element: AdminHome },
    { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard, element: Dashboard },
    { path: '/admin/cakes', name: 'Cakes', component: Cake, element: Cake },
    { path: '/admin/cakes/add', name: 'Add Cakes', component: AddCakes, element: AddCakes },
    { path: '/admin/cakes/edit/:id', name: 'Edits Cakes', component: EditCakes, element: EditCakes },
    { path: '/admin/orders', name: 'Orders', component: Order, element: Order },
    { path: '/admin/orders/:orderId', name: 'OrdersDetails', component: OrderDetail, element: OrderDetail },
    { path: '/admin/categories', name: 'Categories', component: CategoriesComps, element: CategoriesComps },
    { path: '/admin/users', name: 'Users', component: UserList, element: UserList },
    { path: '/admin/reviews', name: 'Reviews', component: ReviewsList, element: ReviewsList },
    { path: '/admin/offers', name: 'Offers', component: OffersPage, element: OffersPage },
    { path: '/admin/settings', name: 'Settings', component: Setting, element: Setting },
    { path: '/admin/profile', name: 'Profile', component: AdminProfile, element: AdminProfile },



    {
        path: "*",
        component: AdminNotFound,
        element: AdminNotFound
    }
]

export default adminRoutes;