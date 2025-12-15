import React from "react";
import "../App.css";
import logo from "../assets/Images/logo.png";
import { FaAddressCard, FaArrowAltCircleRight, FaArrowLeft, FaBuilding, FaDotCircle, FaInstagram, FaInstagramSquare, FaMailBulk, FaPhoneAlt, FaPhoneSquare, FaVoicemail } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-section text-dark mt-5 ">
      <div className="container py-4">
        <div className="row">
          {/* About */}
          <div className="col-12 col-md-4 mb-3 fade-in">
            <a className="navbar-brand" href="/">
              <img
                src={logo} // your logo path
                alt="MyLogo"
                height="80" // control size
                className="d-inline-block align-text-top"
              />
            </a>
            <p className="small">
              Glow with confidence. We offer premium beauty and wellness
              services to make you look and feel amazing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-4 col-md-4 mb-3 fade-in text-dark">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small px-2 ">
              <li className="py-1">
                <a href="/" className="footer-link">
                 <FaArrowAltCircleRight/> Home
                </a>
              </li>
              <li className="py-1">
                <a href="/services" className="footer-link">
                 <FaArrowAltCircleRight/> Services
                </a>
              </li>
              <li className="py-1">
                <a href="/about" className="footer-link">
                 <FaArrowAltCircleRight/> About Us
                </a>
              </li>
              <li className="py-1">
                <a href="/contact" className="footer-link">
                 <FaArrowAltCircleRight/> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-8 col-md-4 mb-3 fade-in">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">
              <FaBuilding/> Near Ramraj Store,Kamatchipuram Theni Road-625520
            </p>
            <p className="small mb-1"><FaPhoneAlt/> +91 90806 75488</p>
            <p className="small"><FaMailBulk/> vaishnubeautytouch@gmail.com</p>
            <p className="small d-flex align-items-center gap-2">
             <FaInstagramSquare/>
              <a
                href="https://www.instagram.com/vaishnu_beauty_touch/?igsh=MXZmcWdoODloMXJncQ%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                vaishnu_beauty_touch
              </a>
            </p>
          </div>
        </div>

        <div className="text-center pt-3 border-top small">
          © {new Date().getFullYear()} Vaishnu Beauty Touch | All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
