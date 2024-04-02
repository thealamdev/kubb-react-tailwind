import './App.css';
import Register from './components/forms/Register';
import Card from './components/card/Card';
import Blog from './components/blog/Blog';
import Banner from './components/banner/Banner';
import Gallary from './components/gallary/Gallary';
import About from './components/about/About';

function App() {
  return (
    <div className='dark:bg-slate-900'>
      {/* <Register /> */}
      <Banner />
      <About />
      <Card />
      <Gallary />
      <Blog />
    </div>

  );
}

export default App;
