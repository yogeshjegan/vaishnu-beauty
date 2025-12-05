// components/Preloader.js
import React from "react";
import "../App.css";
import logo from "../assets/Images/logo.png";
const Preloader = () => {
  return (
    <div className="preloader">
      <img
      src={logo}
        // src="https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-preloader-ui-progress-png-image_12976269.png" // Replace with your logo
        alt="Loading..."
        className="preloader-logo"
      />
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Preloader;
