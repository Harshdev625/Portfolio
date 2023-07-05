import React from "react";
import Github from "../Image/github.png";
import LinkedIn from "../Image/LinkedIn.png";
import Instagram from "../Image/Instagram.png";
import Facebook from "../Image/Facebook.png";
import "./GetInTouch.css";
const GetInTouch = () => {
  return (
    <div className="shift">
      <div>
      <a href="https://github.com/Harshdev625" target="_blank" rel="noreferrer">
        <img  className="social-icon grow" alt="Github" src={Github}></img>
      </a>
      <a href="https://www.linkedin.com/in/harsh-dev-537260233/" target="_blank" rel="noreferrer">
        <img  className="social-icon grow" alt="LinkedIn" src={LinkedIn}></img>
      </a>
      <a href="https://www.instagram.com/harshdev625/" target="_blank" rel="noreferrer">
        <img className="social-icon grow" alt="Instagram" src={Instagram}></img>
      </a>
      <a href="https://www.facebook.com/harshdev625" target="_blank" rel="noreferrer">
        <img  className="social-icon grow" alt="Mail" src={Facebook}></img>
      </a>
      </div>
    </div>
  );
};

export default GetInTouch;
