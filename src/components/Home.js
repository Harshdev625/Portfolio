import React, { useState, useEffect } from "react";
import hacker from '../Image/hacker.webp'
import 'animate.css';
import "./Home.css";
const Home = () => {
  const array = ["Student", "Web Developer", "Competitive Programmer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container brief-detail">
        <h5 className="textstyle1">Hi, I'am</h5>
        <h1 className="my-name">Harsh Dev,</h1>
        <h1>I'm a <h1  className={`textstyle1 animate__animated animate__fadeInLeft animate__infinite animate__delay-1s`}>{array[index]}</h1></h1>
        <p className="textsytle2">
        I am a third-year student pursuing an Integrated Postgraduate (B.Tech + M.Tech) course majoring in IT at IIIT Gwalior (ABV-Indian Institute of Information Technology and Management, Gwalior). My interests include Full Stack Web Development, Algorithms, Problem Solving, and competitive programming.
        </p>
        <button className="Resume-button"><a className="Resume-link" href={hacker} download>Download Resume</a></button>
      </div>
    </>
  );
};

export default Home;
