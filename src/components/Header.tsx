import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      navigate("/search");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src="/Logo.png" alt="Logo" />
      </Link>
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul className="header-menu">
          <li>
            <Link to="/category/Batiment" className="btn btn-primary">
              Bâtiment
            </Link>
          </li>
          <li>
            <Link to="/category/Services" className="btn btn-primary">
              Services
            </Link>
          </li>
          <li>
            <Link to="/category/Fabrication" className="btn btn-primary">
              Fabrication
            </Link>
          </li>
          <li>
            <Link to="/category/Alimentation" className="btn btn-primary">
              Alimentation
            </Link>
          </li>
        </ul>
        {menuOpen && (
          <button onClick={toggleMenu} className="close-button">
            Fermer
          </button>
        )}{" "}
        {/* Nouveau bouton pour fermer le menu */}
      </nav>
      <div className="header-search">
        <input
          type="text"
          placeholder="Rechercher artisans par nom, spécialité, ou ville..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="form-control"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Rechercher
        </button>
      </div>
      <div className="burger-icon" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
