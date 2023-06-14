import { useState } from "react";

import "./header.scss";
import Navbar from "./Navbar";

export const Header:React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header>

          <Navbar toggleMobileMenu={toggleMobileMenu}  isMobileMenuOpen={isMobileMenuOpen}/>
        </header>
    );
};
