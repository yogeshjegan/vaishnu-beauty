import React from "react";
import "../App.css";
import logo from "../assets/Images/logo.png";
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
          <div className="col-6 col-md-4 mb-3 fade-in text-dark">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-4 mb-3 fade-in">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">
              📍 Near Ramraj Store,Kamatchipuram Theni Road, Chennai
            </p>
            <p className="small mb-1">📞 +91 90806 75488</p>
            <p className="small">✉️ vaishnubeautytouch@gmail.com</p>
            <p className="small d-flex align-items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.8 0 5.5.01 4.7.05c-.8.04-1.3.17-1.8.36a3.6 3.6 0 0 0-1.3.85 3.6 3.6 0 0 0-.85 1.3c-.19.5-.32 1-.36 1.8C.01 5.5 0 5.8 0 8s.01 2.5.05 3.3c.04.8.17 1.3.36 1.8.2.5.45.9.85 1.3.4.4.8.65 1.3.85.5.19 1 .32 1.8.36.8.04 1.1.05 3.3.05s2.5-.01 3.3-.05c.8-.04 1.3-.17 1.8-.36.5-.2.9-.45 1.3-.85.4-.4.65-.8.85-1.3.19-.5.32-1 .36-1.8.04-.8.05-1.1.05-3.3s-.01-2.5-.05-3.3c-.04-.8-.17-1.3-.36-1.8a3.6 3.6 0 0 0-.85-1.3 3.6 3.6 0 0 0-1.3-.85c-.5-.19-1-.32-1.8-.36C10.5.01 10.2 0 8 0zm0 3.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zM12 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
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
