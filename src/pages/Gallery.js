import React from "react";
import '../App.css';// animation styles
import img1 from "../assets/Images/bride3.jpg";
import img2 from "../assets/Images/bride2.jpg";
import img3 from "../assets/Images/bride1.jpg";
import img4 from "../assets/Images/bride4.jpg";
import PhotoshootGallery from "./PhotoshootGallery";
import { Helmet } from "react-helmet";
const Gallery = () => {
  const images = [
    { id: 1, title: "Nature", img: img1 },
    { id: 2, title: "Mountains", img: img2 },
    { id: 3, title: "City", img: img3 },
    { id: 4, title: "Animals", img: img4 }
  ];

  return (
    <div className="container py-5">
        <Helmet>
  <title>Gallery | Vaishnu Beauty Parlour</title>
</Helmet>

      <h2 className="text-center mb-4 fade-down">Bridal Gallery</h2>

      <div className="row g-4">
        {images.map((item) => (
          <div key={item.id} className="col-12 col-md-4 col-lg-3 fade-in">
            <div className="card custom-card shadow-sm">
              <div className="img-container">
                <img src={item.img} className="card-img-top" alt={item.title} />
              </div>
              <div className="card-body text-center d-none">
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
<PhotoshootGallery/>
    </div>
  );
};

export default Gallery;
