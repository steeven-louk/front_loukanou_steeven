import React from 'react'
import { FaBars, FaBus, FaTimes, FaPlane, FaBookmark } from "react-icons/fa";
import {IoMdBoat, IoMdChatbubbles, IoMdTrain} from "react-icons/Io";

import logo from '../assets/logo.png';
import logo_mobile from '../assets/logo-mobile.png'

type Props={
    isMobileMenuOpen: boolean,
    toggleMobileMenu: () => void,
}

const Navbar: React.FC<Props>  =({isMobileMenuOpen,toggleMobileMenu}) => {
  return (
    <nav className="navbar_ ">
    <div className="navbar-logo">
        <img src={logo} alt="logo" width="100" />

    </div>
    <div
        className={`navbar-links ${isMobileMenuOpen ? "mobile-menu-open" : ""
            }`}
    >
        <div className="navbar-mobile-header">
            <div className="navbar-logo-mobile">
                <img
                    src={logo_mobile}
                    alt="logo-mobile"
                    width="100"
                />
            </div>
            <div className="navbar-close-icon" onClick={toggleMobileMenu}>
                <FaTimes />
            </div>
        </div>
        <ul className="d-flex ">
            <li className="nav-item">
                <a href="#" className="nav-link">
                  <FaBars className="hide-icon"/>  Currency
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <IoMdChatbubbles className="hide-icon"/> Language
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                  <FaBookmark className="hide-icon"/>  Your bookings
                </a>
            </li>
            <li className="nav-item  hide-link">
                <a href="#" className="nav-link">
                    Sign in
                </a>
            </li>
            <li className="nav-item hide-link ">
                <a href="#" className="nav-link">
                    Create an account
                </a>
            </li>
        </ul>
        <span className="text-muted useful p-2 fw-semibold text-uppercase">useful links</span>

        <ul className="navbar-links-right ">
            <li className="nav-item">
                <a href="#" className="nav-link">
                   <IoMdTrain className="hide-icon"/> Trains
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                   <FaBus className="hide-icon"/> Buses
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                   <FaPlane className="hide-icon"/> Flights
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                   <IoMdBoat className="hide-icon"/> Ferries
                </a>
            </li>
            <button className="btn btn-danger  justify-content-center  mx-auto signIn">Sign in</button>

        </ul>
    </div>
    <div className="navbar-mobile-icon" onClick={toggleMobileMenu}>
        <FaBars />
    </div>

</nav>
  )
}

export default Navbar