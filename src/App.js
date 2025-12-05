import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ServicesPage from './pages/Service';
import { useState, useEffect } from 'react';
import Preloader from './components/preLoader';
import EnquiryButton from './components/EnquiryButton';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2 seconds)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
    <BrowserRouter>
   <ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    <EnquiryButton/>
    </>
  );
}

export default App;
