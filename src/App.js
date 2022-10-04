import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Nosotros from './components/Nosotros/Nosotros';
import Contact from './components/Contact/Contact'; //nico el nombre de las carpetas en minusculas te parece?
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Nosotros />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
