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

function App() {
  return (
    <div className='dark:bg-slate-900'>
      {/* <Register /> */}
      <Navbar />
      <Banner />
      <About />
      <Card heading={'WHAT SERVICES DO I OFFER'} />
      <Vehicles heading={'VEHICLES'} />
      <Gallary />
      <Blog />
      <AboutService heading1={'A LITTLE ABOUT ME'} heading2={'MY SERVICES'} />
    </div>

  );
}

export default App;
