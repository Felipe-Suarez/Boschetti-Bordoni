import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Contact from './components/Contact/Contact'; //nico el nombre de las carpetas en minusculas te parece?

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
