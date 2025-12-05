// EnquiryButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Make sure to install react-icons: npm install react-icons
import '../App.css'; // We'll put animation here

const EnquiryButton = () => {
  const whatsappNumber = "919876543210"; // Replace with your number
  const message = encodeURIComponent("Hello! I want to make an enquiry.");

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp size={24} style={{ marginRight: "10px" }} />
      Enquiry Now
    </button>
  );
};

export default EnquiryButton;
