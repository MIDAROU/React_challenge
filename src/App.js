import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Project';
import './Css/Style.css';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
