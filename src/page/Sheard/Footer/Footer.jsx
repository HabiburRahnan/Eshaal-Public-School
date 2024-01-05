import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto">
      <div className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <Link to="/">
            <img src="https://i.ibb.co/9NjtFjF/logo.jpg" className="h-14" />
          </Link>
          <p>
            Eshaal Public School.
            <br />
            Meli Burji, Punjab, Pakistan
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social Contact</header>
          <div className="grid grid-flow-col gap-4">
            <Link className="" to="https://www.facebook.com/eshaalpublicschool">
              <FaFacebook className="text-4xl"/>
            </Link>
            <Link to="https://www.facebook.com/eshaalpublicschool">
              <FaInstagramSquare className="text-4xl"/>
            </Link>
          </div>
        </nav>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright © {year} - All right reserved by Eshaal Public School.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
