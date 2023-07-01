import React from 'react'
import ParticlesBg from 'particles-bg'
import Navbar from './components/Navbar';
import './App.css';
import TechStack from './components/TechStack';
import Home from './components/Home';
import ColorToggler from './components/ColorToggler';
import Contact from './components/Contact';
import Project from './components/Project';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <>
      <div className="Textcolor">
        <Navbar />
        <Home />
        <TechStack />
        <ColorToggler />
        <GetInTouch/>
        <Project/>
        <Contact />
        <ParticlesBg type="cobweb" bg={true} />
      </div>
    </>
  );
}

export default App;
