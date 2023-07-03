import React from "react";
import Typewriter from "typewriter-effect";
import hacker from "../Image/hacker.webp";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="brief-detail" id="Home">
        <h5 className="textstyle1">Hi, I'am</h5>
        <h1 className="my-name">Harsh Dev,</h1>
        <h1>
          I'm a
          <Typewriter
            options={{
              strings: ["Student", "Web Developer", "Competitive Programmer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="textsytle2">
          I am a third-year student pursuing an Integrated Postgraduate (B.Tech
          + M.Tech) course majoring in IT at IIIT Gwalior (ABV-Indian Institute
          of Information Technology and Management, Gwalior). My interests
          include Full Stack Web Development, Algorithms, Problem Solving, and
          competitive programming.
        </p>
        <button className="Resume-button">
          <a className="Resume-link" href={hacker} download>
            Download Resume
          </a>
        </button>
      </div>
    </>
  );
};

export default Home;
