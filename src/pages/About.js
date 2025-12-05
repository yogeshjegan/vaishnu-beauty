import React from "react";
import "../App.css";
import FounderMoments from "./FounerMoments";
import founder from "../assets/Images/founter_img.png";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  return (
    <div className="container my-2">
        <Helmet>
  <title>About Us | Vaishnu Beauty Parlour</title>
</Helmet>


      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="about col-md-6 mb-4 mb-md-0 d-flex justify-content-center p-5">
          <img
           src={founder}
            alt="Beauty Parlour"
            className="img-fluid rounded shadow "
          
          />
        </div>

        {/* Right Side Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-4 gradient-text">About Us</h2>
          <p>
            Welcome to our Beauty Parlour, where elegance meets expertise. 
            Our mission is to provide high-quality services in a relaxing 
            and friendly environment, ensuring every client feels pampered.
          </p>
          <p>
            With a team of certified professionals, we offer a wide range 
            of services including hair styling, skin care, and makeup. 
            We stay updated with the latest trends to make you look your best.
          </p>
          <p>
            Customer satisfaction is our top priority. From the moment you 
            step in, we focus on delivering personalized care tailored 
            to your unique needs. Visit us to experience beauty and luxury.
          </p>
        </div>
      </div>

      <FounderMoments/>
    </div>
  );
};

export default AboutUs;
