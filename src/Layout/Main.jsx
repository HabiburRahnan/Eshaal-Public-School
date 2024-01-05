import { Outlet } from "react-router-dom";
import Navbar from "../page/Sheard/Navbar/Navbar";
import Footer from "../page/Sheard/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>

      <ScrollToTop smooth />
      <Footer></Footer>
    </div>
  );
};

export default Main;
