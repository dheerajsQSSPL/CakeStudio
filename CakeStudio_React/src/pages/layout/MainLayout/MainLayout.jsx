import Content from "../content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <>
            <Header />

            <Navbar />

            <Content />

            <Footer />
        </>
    );
};

export default MainLayout;