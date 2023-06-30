import Navbar from './components/Navbar'
import './App.css';
import TechStack from './components/TechStack';
import Home from './components/Home';
import ColorToggler from './components/ColorToggler';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <TechStack/>
    <ColorToggler/>
    <Contact/>
    </>
  );
}

export default App;
