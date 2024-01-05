import { Link } from "react-router-dom";

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
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            
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
