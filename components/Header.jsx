import React from "react";
//INTERNAL IMPORT
import { shortenAddress } from "../utils/index";

const Header = ({ address, connect }) => {
  return <div className="mein-menu">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
        <img src="assets/img/logo.png" alt="swap" />
        </a>
        <button 
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {}
          </ul>
        </div>
      </div>
    </nav>
  </div>;
};

export default Header;
