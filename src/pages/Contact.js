import React, { useState } from "react";
import "../App.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "9080675488"; // Replace with your WhatsApp number

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    const msg = `Hello, I would like to contact you.
Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}`;

    const encodedMsg = encodeURIComponent(msg);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, "_blank");
  };

  return (
    <div className="container-fluid contact-wrapper py-5">
        <Helmet>
  <title> | Vaishnu Beauty Parlour</title>
</Helmet>

      <div className="row">
        
        {/* Left Side Map */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="map-container shadow">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.801145761923!2d77.4545569747917!3d9.86704419023165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0711598f68a099%3A0xb8dc0a7d779286a2!2sRamraj%20Stores!5e0!3m2!1sen!2sin!4v1764785414321!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: "15px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="contact-card p-4 shadow-lg w-100">
            <h2 className="contact-title text-center mb-4">Contact Us</h2>

            <input
              type="text"
              name="name"
              value={form.name}
              className="form-control custom-input mb-3"
              placeholder="Your Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              className="form-control custom-input mb-3"
              placeholder="Your Phone Number"
              onChange={handleChange}
            />

            <textarea
              name="message"
              value={form.message}
              className="form-control custom-input mb-3"
              rows="4"
              placeholder="Write your message..."
              onChange={handleChange}
            ></textarea>

            <button className="btn submit-btn w-100" onClick={sendToWhatsApp}>
              Send on WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
