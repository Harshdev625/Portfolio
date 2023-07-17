import React from "react";
import Github from "../Image/github.png";
import LinkedIn from "../Image/LinkedIn.png";
import Instagram from "../Image/Instagram.png";
import Facebook from "../Image/Facebook.png";

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="get-in-touch-container">
        <a href="https://github.com/Harshdev625" target="_blank" rel="noreferrer">
          <img className="social-icon grow" alt="Github" src={Github} />
        </a>
        <a href="https://www.linkedin.com/in/harsh-dev-537260233/" target="_blank" rel="noreferrer">
          <img className="social-icon grow" alt="LinkedIn" src={LinkedIn} />
        </a>
        <a href="https://www.instagram.com/harshdev625/" target="_blank" rel="noreferrer">
          <img className="social-icon grow" alt="Instagram" src={Instagram} />
        </a>
        <a href="https://www.facebook.com/harshdev625" target="_blank" rel="noreferrer">
          <img className="social-icon grow" alt="Mail" src={Facebook} />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
