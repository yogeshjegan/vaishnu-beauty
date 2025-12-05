import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Import only 2 images
import img1 from "../assets/Images/founter2.jpg";
import img2 from "../assets/Images/founter3.jpg";

const FounderMoments = () => {
  const moments = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">✨ Proud Moments ✨</h2>

      <div className="row g-4 justify-content-center">
        {moments.map((moment) => (
          <div key={moment.id} className="col-12 col-sm-6 col-lg-5">
            <div className="card shadow border-0">
              <img
                src={moment.img}
                alt="Founder Moment"
                className="card-img-top founder-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderMoments;
