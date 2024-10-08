import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdLocationPin, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Header.css";
import AsideNav from "../asideNav/AsideNav";
import SubMenu from "../subMenu/SubMenu";

function Header() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="">
        <div className="header-wrap">
          <div className="logo">
            <Link to="/" title="Nectar Digit">
              <img src="  /images/site-logo.png" alt="Nectar Digit" />
              {/* <img
                src="https://www.nectardigit.com/uploads/photos/logo/site-logo.png"
                alt="Nectar Digit"
              /> */}
            </Link>
          </div>
          <nav className={`nav${isNavOpen ? " nav--open" : ""}`}>
            <div className="location-nav">
              <div className="location-icon-box">
                <a href="tel:+977-01-5904030">
                  <FaPhoneAlt />
                </a>
              </div>
              <div className="location-icon-box">
                <a href="https://www.google.com/maps" target="_blank">
                  <MdLocationPin />
                </a>
              </div>
              <div className="location-icon-box">
                <Link onClick={() => setIsNavOpen(false)}>
                  <IoClose />
                </Link>
              </div>
            </div>
            <ul className="nav-lists">
              <li>
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-links">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-links">
                  Services
                </NavLink>
              </li>
              <li className="nav-links-wsub">
                <Link
                  className="nav-links"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                >
                  Ad marketing <MdOutlineKeyboardArrowDown />
                </Link>
                <SubMenu isSubMenuOpen={isSubMenuOpen} />
              </li>
              <li>
                <NavLink to="/portfolio" className="nav-links">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="nav-links">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-links">
                  Contact
                </NavLink>
              </li>

              <li className="nav-link-bar-cont">
                <button
                  className="bars nav-link-bar"
                  onClick={() => setIsAsideOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="bars">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <AsideNav isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
      </div>
    </header>
  );
}

export default Header;
