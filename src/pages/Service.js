import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      name: "Facial Treatment",
      desc: "Deep cleansing & glow facial",
      price: "950",
    },
    {
      id: 2,
      name: "Haircut & Styling",
      desc: "Trendy haircut & style finish",
      price: "499",
    },
    {
      id: 3,
      name: "Bridal Makeup",
      desc: "Complete bridal makeover package",
      price: "6499",
    },
    {
      id: 4,
      name: "Manicure",
      desc: "Hand care grooming treatment",
      price: "349",
    },
    {
      id: 5,
      name: "Pedicure",
      desc: "Relaxing foot spa & grooming",
      price: "450",
    },
    {
      id: 6,
      name: "Hair Straightening",
      desc: "Makes your Hair Looks Good",
      price: "4000",
    },
  ];

  return (
    <div className="container py-5">
        <Helmet>
  <title>Our Services | Vaishnu Beauty Parlour</title>
</Helmet>

      <h2 className="text-center mb-4 fade-down">✨ Our Services ✨</h2>

      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-12 col-sm-6 col-lg-4 fade-in">
            <div className="card service-card shadow-sm p-3">
              <h5 className="fw-bold text-center mb-2">{service.name}</h5>
              <p className="text-muted text-center">{service.desc}</p>

              <h4 className="text-center fw-bold">
                <span className="badge bg-warning text-dark me-2">
                  Starts From
                </span>
                <span className="text-primary">₹{service.price}</span>
              </h4>

              {/* Mobile: Call button */}
              <a
                href="tel:+9190806 75488"
                className="btn btn-dark w-100 mt-2 d-block d-md-none"
              >
                Book Now
              </a>

              {/* Desktop: WhatsApp button */}
              <a
                onClick={() => {
                  window.open(
                    `https://wa.me/9190806 75488?text=appointment`,
                    "_blank"
                  );
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success w-100 mt-2 d-none d-md-block"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
