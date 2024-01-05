import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bottom-0 ">
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
          <header className="footer-title">Important Link</header>
          <div className="grid grid-flow-col gap-4">
            <h1>
              <Link to="/admission">Admission</Link>
            </h1>
            <h1>
              <Link to="/success">Sucess</Link>
            </h1>
            <h1>
              <Link to="/about">About</Link>
            </h1>
            <h1>
              <Link to="/contact">Contact</Link>
            </h1>
          </div>

          <div className="grid  ">
            <h1>Phone Number: +92 301 4126824</h1>
            <h1>Phone Number: +92 331 8730421</h1>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Social Contact</header>
          <div className="grid grid-flow-col gap-4">
            <Link className="" to="https://www.facebook.com/eshaalpublicschool">
              <FaFacebook className="text-4xl" />
            </Link>
            <Link to="https://www.instagram.com/eshaal_public_school?igsh=YWYwM2I1ZDdmOQ==">
              <FaInstagramSquare className="text-4xl" />
            </Link>
            <Link to="mailto:max.rehmantariq8929@gmail.com?body=My custom mail body">
              <MdOutlineMail className="text-4xl" />
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
