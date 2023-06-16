import React from "react";

// ICONS
import {
  FaBars,
  FaBus,
  FaTimes,
  FaPlane,
  FaBookmark,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

import { IoMdBoat, IoMdChatbubbles, IoMdTrain } from "react-icons/Io";

// ICONS

// IMAGES
import logo from "../../assets/logo.png";
import logo_mobile from "../../assets/logo-mobile.png";
import flagUs from "../../assets/flag-us.svg";
// IMAGES

//importation du style
import "./navbar.scss";

type Props = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const Navbar: React.FC<Props> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <div className="container">
      <nav className="navbar_ ">
        <div className="navbar-logo">
          <img src={logo} alt="logo" width="100" loading="lazy" />
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <div className="navbar-mobile-header">
            <div className="navbar-logo-mobile">
              <img
                src={logo_mobile}
                alt="logo-mobile"
                width="100"
                loading="lazy"
              />
            </div>

            <div className="navbar-close-icon" onClick={toggleMobileMenu}>
              <FaTimes />
            </div>
          </div>

          <ul className="right-link align-items-center ">
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center justify-content-between">
                <span className="hide-icon">
                  <FaBars className="icon"/> Currency
                </span>
                <span className="d-inline-flex align-items-center fw-bold">
                  EUR <FaChevronRight className="hide-icon"/>
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center justify-content-between">
                <span className="hide-icon">
                  <IoMdChatbubbles className="icon"/> Language
                </span>
                <span className="d-inline-flex align-items-center fw-bold">
                  <img src={flagUs} width="30px" loading="lazy" alt="flag-us" />{" "}
                  <FaChevronRight className="hide-icon" />
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center justify-content-between">
                <span>
                  <FaBookmark className="hide-icon icon" /> Your bookings
                </span>
                <FaChevronRight className="hide-icon" />
              </a>
            </li>

            <div className="d-inline-flex ms-2 gap-3 account">
              <a className="nav-link  text-white hide-link">Sign in</a>
              <a className="nav-link  text-white hide-link">Create an account</a>
            </div>

          </ul>

          <span className="text-muted useful p-2 fw-semibold text-uppercase">
            useful links
          </span>

          <ul className="navbar-links-right ">
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center justify-content-between">
                <span>
                  <IoMdTrain className="hide-icon icon" /> Trains
                </span>
                <FaChevronDown className="hide-icon" />
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center justify-content-between">
                <span>
                  <FaBus className="hide-icon icon"/> Buses
                </span>
                <FaChevronDown className="hide-icon"/>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center justify-content-between">
                <span>
                  <FaPlane className="hide-icon icon" /> Flights
                </span>
                <FaChevronDown className="hide-icon" />
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center justify-content-between">
                <span>
                  <IoMdBoat className="hide-icon icon" /> Ferries
                </span>
                <FaChevronDown className="hide-icon" />
              </a>
            </li>

            <button className="justify-content-center d-block mx-auto signIn">
              Sign in
            </button>

          </ul>

        </div>

        <div className="navbar-mobile-icon" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </nav>
   </div>
  );
};

export default Navbar;
