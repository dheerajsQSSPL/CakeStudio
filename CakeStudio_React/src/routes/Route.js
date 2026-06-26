import RegisterComponent from "../components/RegisterComponent/RegisterComponent";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const route = [
    { path: '/login', name: 'LogIn', component: Login, element: Login },
    { path: '/register', name: 'Register', component: RegisterComponent, element: RegisterComponent },
    { path: '/', name: 'Home', component: Home, element: Home },
]

export default route;