import React, { useState, useEffect } from 'react';
import './Home.css';
const Home = () => {
  const array = ['Student', 'Web Developer', 'Competitive Programmer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <h5>Hi, I'm</h5>
        <h1>Harsh Dev,</h1>
        <h1>I'm a {array[index]}</h1>
        <p>
          My name is Harsh Dev, I'm a student at ABV-IIITM, Gwalior. Currently,
          I am pursuing an Integrated B.Tech and M.Tech in Information
          Technology. Additionally, I am an experienced Full-Stack Web
          Developer, I build websites from the ground up.
        </p>
      </div>
      
    </>
  );
};

export default Home;
