import React, { useMemo } from "react";
import "../App.css";

// Import local images
import img1 from "../assets/Images/shoot_img1.jpg";
import img2 from "../assets/Images/shoot_img2.jpg";
import img3 from "../assets/Images/shoot_img3.jpg";
import img4 from "../assets/Images/shoot_img4.jpg";
import img5 from "../assets/Images/shoot_img5.jpg";
import img6 from "../assets/Images/shoot_img6.jpg";
import img7 from "../assets/Images/shoot_img7.jpg";
import img8 from "../assets/Images/shoot_img8.jpg";
import img9 from "../assets/Images/shoot_img9.jpg";

const PhotoshootGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // Shuffle images only once on component load
  const shuffledImages = useMemo(() => {
    return [...images].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📸 Photoshoot Gallery</h2>

      <div className="row g-3">
        {shuffledImages.map((img, index) => (
          <div className="col-sm-12  col-md-4 col-lg-3" key={index}>
            <div className="gallery-card">
              <img
                src={img}
                className="img-fluid rounded shadow-sm w-60 justify-content-center"
                alt={`Gallery ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoshootGallery;
