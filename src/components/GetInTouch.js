import React from "react";
import Github from "../Image/github.png";
import LinkedIn from "../Image/LinkedIn.png";
import Instagram from "../Image/Instagram.png";
import Facebook from "../Image/Facebook.png";
import "./GetInTouch.css";
const GetInTouch = () => {
  return (
    <div className="social-icon-container shift">
      <div>
      <a href="https://github.com/Harshdev625">
        <img  className="social-icon" alt="Github" src={Github}></img>
      </a>
      <a href="https://www.linkedin.com/in/harsh-dev-537260233/">
        <img  className="social-icon" alt="LinkedIn" src={LinkedIn}></img>
      </a>
      <a href="https://www.instagram.com/harshdev625/">
        <img className="social-icon" alt="Instagram" src={Instagram}></img>
      </a>
      <a href="https://www.facebook.com/harshdev625">
        <img  className="social-icon" alt="Mail" src={Facebook}></img>
      </a>
      </div>
    </div>
  );
};

export default GetInTouch;
