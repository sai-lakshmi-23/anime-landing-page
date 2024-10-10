import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Characters from './components/Characters';
import ManhwaCarousel from './components/ManhwaCarousel';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Characters />
      <ManhwaCarousel />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
