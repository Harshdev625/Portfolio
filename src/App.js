import './App.css';
import React, { useState } from 'react';
import ParticlesBg from 'particles-bg'
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Home from './components/Home';
import ColorToggler from './components/ColorToggler';
import Contact from './components/Contact';
import Project from './components/Project';
import GetInTouch from './components/GetInTouch';

function App() {
  const [bgColor, setBgColor] = useState('#004642');

  const handleColorChange = (color) => {
    setBgColor(color);
  };
  return (
    <>
      <div className="Textcolor App"  style={{ backgroundColor: bgColor }}>
        <Navbar />
        <ColorToggler onColorChange={handleColorChange} />
        <GetInTouch/>
        <Home />
        <TechStack />
        <Project/>
        <Contact />
        <ParticlesBg type="cobweb" bg={true} />
      </div>
    </>
  );
}

export default App;
