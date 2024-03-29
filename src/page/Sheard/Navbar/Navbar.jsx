import Headroom from "react-headroom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/success">Success</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <Headroom>
      <div className="navbar sticky top-3  bg-opacity-30 bg-base-100  max-w-[1280px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button"className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div
           className="tooltip  tooltip-right h-14"
            data-tip="Eshaal Public School"
          >
            <Link to="/">
              <img src="https://i.ibb.co/9NjtFjF/logo.jpg"className="h-14" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        
      </div>
    </Headroom>
  );
};

export default Navbar;
