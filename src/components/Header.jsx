import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Intas logo" />
        </Link>

        <nav className="nav">
           <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/about">About Us</Link>
            {openMenu === "about" && (
              <div className="dropdown">
                <Link to="/about/Overview">Overview</Link>
                <Link to="/about/Scientific Initiative">Scientific Initiative</Link>
                <Link to="/about/Global Presence">Global Presence</Link>
                <Link to="/about/Award & Accolades">Award & Accolades</Link>
              </div>
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("Capabilities")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/Capabilities">Our Capabilities</Link>
            {openMenu === "Capabilities" && (
              <div className="dropdown">
                <Link to="/about/Manufacturing">Manufacturing</Link>
                <Link to="/about/R & D">R & D</Link>
              </div>
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/products">Products</Link>
            {openMenu === "products" && (
              <div className="dropdown">
                <Link to="/products/India">India</Link>
                <Link to="/products/International">International</Link>
              </div>
            )}
          </div>
           <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("Knowledge")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/Knowledge">Knowledge Hub</Link>
            {openMenu === "Knowledge" && (
              <div className="dropdown">
                <Link to="/Knowledge/Vet">Vet</Link>
                <Link to="/Knowledge/Owner">Owner</Link>
                <Link to="/Knowledge/Polivet">Polivet</Link>
              </div>
            )}
          </div>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
