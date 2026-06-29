import RegisterComponent from "../components/RegisterComponent/RegisterComponent";
import About from "../pages/AboutUs/About";
import Cakes from "../pages/Cakes/Cakes";
import Category from "../pages/Categories/Category";
import { Contact } from "../pages/Contact/Contact";
import CustomCakes from "../pages/CustomCakes/CustomCakes";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Occasions from "../pages/Ocassions/Ocassion";
import OccasionList from "../pages/Ocassions/OcassionList";
import Offers from "../pages/Offers/Offers";

const route = [
    { path: '/login', name: 'LogIn', component: Login, element: Login },
    { path: '/register', name: 'Register', component: RegisterComponent, element: RegisterComponent },
    { path: '/', name: 'Home', component: Home, element: Home },
    { path: '/cakes', name: 'Cakes', component: Cakes, element: Cakes },
    { path: '/categories', name: 'Categories', component: Category, element: Category },
    { path: '/occasions', name: 'Occasions', component: Occasions, element: Occasions },
    { path: '/occasions/:slug', name: 'OccasionsList', component: OccasionList, element: OccasionList },
    { path: '/custom-cakes', name: 'CustomCakes', component: CustomCakes, element: CustomCakes },
    { path: '/offers', name: 'Offers', component: Offers, element: Offers },
    { path: '/about', name: 'About', component: About, element: About },
    { path: '/contact', name: 'Contact', component: Contact, element: Contact },
]

export default route;