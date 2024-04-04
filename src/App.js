import './App.css';
import Register from './components/forms/Register';
import Card from './components/card/Card';
import Blog from './components/blog/Blog';
import Banner from './components/banner/Banner';
import Gallary from './components/gallary/Gallary';
import About from './components/about/About';
import AboutService from './components/about-service/AboutService';
import Vehicles from './components/vehicles/Vehicles';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import React, { useState, useEffect } from 'react';
import Placeholder from './components/placeholder/Placeholder';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000)
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className='dark:bg-slate-900'>
      {loading ? (
        <Placeholder />
      ) : (
        <>
          <Navbar />
          <Banner />
          <About />
          <Card heading={'WHAT SERVICES DO I OFFER'} />
          <Vehicles heading={'VEHICLES'} />
          <Gallary />
          <Blog />
          <AboutService heading1={'A LITTLE ABOUT ME'} heading2={'MY SERVICES'} />
          <Footer />
        </>
      )}
    </div>
  );

}

export default App;
