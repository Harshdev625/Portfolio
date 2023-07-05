import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';
import GetInTouch from './components/GetInTouch';
import CompetitiveLife from './components/CompetitiveLife';

function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.00,
        scaleMobile: 1.00,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <div className="Textcolor App"  ref={myRef}>
        <CompetitiveLife/>
        <Navbar />
        <Home />
        <TechStack />
        <Project/>
        <Contact />
        <GetInTouch/>
      </div>
    </>
  );
}

export default App;
