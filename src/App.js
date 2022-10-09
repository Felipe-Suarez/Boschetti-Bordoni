import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import CallToAction from './components/CallToAction/CallToAction';
import QuinesSomos from './components/QuienesSomos/QuienesSomos';
import Nosotros from './components/Nosotros/Nosotros';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className={`load-animation ${window.innerWidth < 1000 && 'animation-mobile'}`}></div>
      <Header />
      <Home />
      <Services />
      <CallToAction />
      <QuinesSomos />
      <Nosotros />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
