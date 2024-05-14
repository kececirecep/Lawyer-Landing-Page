
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './Section/About/About';
import Contact from './Section/Contact/Contact';
import CounterSec from './Section/CounterSec/CounterSec';
import Hero from './Section/Hero/Hero';
import Testimonial from './Section/Testimonial/Testimonial';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <CounterSec />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
