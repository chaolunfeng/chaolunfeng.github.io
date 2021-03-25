import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
