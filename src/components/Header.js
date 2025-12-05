import React from "react";
import logo from "../assets/Images/logo.png";
import '../App.css';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top px-5 p-1">
      <a className="navbar-brand" href="/">
  <img
    src={logo}        // your logo path
    alt="MyLogo"
    height="80"            // control size
    className="d-inline-block align-text-top"
  />
</a>


      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu Items */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
 <li className="nav-item">
            <a className="nav-link" href="/gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About us</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/services">Services</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
