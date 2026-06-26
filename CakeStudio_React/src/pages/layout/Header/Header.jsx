import { AppBar, Toolbar } from "@mui/material";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";

import "./Header.css";

const Header = () => {

    return (

        <AppBar
            position="static"
            elevation={0}
            color="inherit"
            className="header"
        >

            <Toolbar className="header-toolbar">

                <Logo />

                <SearchBar />

                <HeaderActions />

            </Toolbar>

        </AppBar>

    );

};

export default Header;