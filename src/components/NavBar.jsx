import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-link">
          Movie App
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="" className="nav-links">
          Home
        </Link>
        <Link to="favorites" className="nav-links">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
