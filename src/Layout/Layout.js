import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      {/* Global SEO Setup */}
      <Helmet>
        <title>Vaishnu Beauty Parlour</title>

        <meta
          name="description"
          content="Vaishnu Beauty Parlour – Professional beauty services including bridal makeup, facials, hairstyles & more."
        />
        <meta
          name="keywords"
          content="Vaishnu Beauty Parlour, beauty parlour, bridal makeup, hairstyle, salon, facial"
        />

        {/* Social Media Preview */}
        <meta property="og:title" content="Vaishnu Beauty Parlour" />
        <meta
          property="og:description"
          content="Glow with our premium beauty services."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />
      </Helmet>

      <Header />

      {/* Page Content */}
      <div style={{ marginTop: 100 }}>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
