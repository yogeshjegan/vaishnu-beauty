import React from "react";
import PhotoshootGallery from "./PhotoshootGallery";
import img1 from "../assets/Images/banner2.png";
import img2 from "../assets/Images/banner3.png";
import img3 from "../assets/Images/banner4.png";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Vaishnu Beauty Parlour</title>
      </Helmet>

      {/* Carousel */}
      <div
        id="mainCarousel"
        className="carousel slide d-block d-md-2"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="0"
            className="active d-none"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a
              onClick={() => {
                window.open(
                  `https://wa.me/917639384577?text=appointment`,
                  "_blank"
                );
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img1}
                className="d-block w-100 carousel-img"
                alt="Slide 1"
              />
            </a>

            <div className="carousel-caption d-none">
              <h3>Slide One</h3>
              <p>This is the first slide</p>
            </div>
          </div>
          <div className="carousel-item">
            <a
              onClick={() => {
                window.open(
                  `https://wa.me/917639384577?text=appointment`,
                  "_blank"
                );
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img2}
                className="d-block w-100 carousel-img"
                alt="Slide 2"
              />
            </a>
            <div className="carousel-caption d-none ">
              <h3>Slide Two</h3>
              <p>This is the second slide</p>
            </div>
          </div>
          <div className="carousel-item">
            <a
              onClick={() => {
                window.open(
                  `https://wa.me/917639384577?text=appointment`,
                  "_blank"
                );
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img3}
                className="d-block w-100 carousel-img"
                alt="Slide 3"
              />
            </a>
            <div className="carousel-caption d-none ">
              <h3>Slide Three</h3>
              <p>This is the third slide</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Content Under Carousel */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Welcome to Our Beauty Parlour</h2>
        <p className="text-center mb-3">
          We provide professional beauty services to make you look and feel your
          best.
        </p>
        <p className="text-center mb-3">
          Our team of experienced professionals uses high-quality products and
          latest techniques for hair, skin, and nail care.
        </p>
        <p className="text-center mb-3">
          Book your appointment today and experience the ultimate beauty
          experience!
        </p>
      </div>

      {/* //Photoshootgallery */}
      <PhotoshootGallery />
    </div>
  );
};

export default Home;
