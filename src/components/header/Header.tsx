import { useState } from "react";

import "./header.scss";
import Navbar from "../navbar/Navbar";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    // pour ouvrir et fermer le menu mobile au clique
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="bg-danger p-2 text-center text-white fw-bold">
        <span>ceci est un clone statique de OMIO qui simule le systeme de recherche complexe de la platfom</span>
      </div>
      <Navbar
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <div className="text-desc text-white ps-3">
        <h2 className="fw-bold">Travel that moves you</h2>
        <h4>Book train, bus, flight and ferry tickets</h4>
      </div>
    </header>
  );
};
