import React from 'react';
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary Navbar-Color">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/education">Education</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/porfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
