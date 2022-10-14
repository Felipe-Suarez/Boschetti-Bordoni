import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import CallToAction from './components/CallToAction/CallToAction';
import Values from './components/Values/Values';
import QuinesSomos from './components/QuienesSomos/QuienesSomos';
import Nosotros from './components/Nosotros/Nosotros';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {

  const isMobile = () => {
    return window.innerWidth < 650
  }

  let classDesktop = ''
  if (!isMobile()) classDesktop = 'animation-desktop';

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (isMobile()) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    } else {
      setLoading(false)
    }
  })

  return (
    <div className="App">
      {
        isLoading ?
          isMobile() && <div className={`load-animation ${classDesktop}`}></div>
          :
          <>
            <div className={`load-animation ${isMobile() && 'animation-mobile'} ${classDesktop}`}></div>
            <Header />
            <Home />
            <Services />
            <CallToAction />
            <Values />
            <QuinesSomos />
            <Nosotros />
            <Contact />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
