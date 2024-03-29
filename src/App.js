import About from '../../girija/src/components/About';
import Contact from '../../girija/src/components/Contact';
import Home from '../../girija/src/components/Home';
import Navbar from '../../girija/src/components/Navbar';
import Skills from '../../girija/src/components/Skills';

import './App.css';
import Works from '../../girija/src/components/Works';
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works/>

      <Contact />
    </div>
  );
}

export default App;
