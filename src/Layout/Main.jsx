import { Outlet } from "react-router-dom";
import Navbar from "../page/Sheard/Navbar/Navbar";
import Footer from "../page/Sheard/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;