
import { navItems } from "../../../constants/navItems";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { navItems } from "./navItems";
import "./Navbar.css";

const Navbar = () => {
    return (
        <Box className="navbar">

            <Box className="navbar-container">

                {navItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active-link"
                                : "nav-link"
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}

            </Box>

        </Box>
    );
};

export default Navbar;