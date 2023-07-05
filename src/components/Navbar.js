import React from "react";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="Navbar-Color navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('home')}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('skills')}>
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('project')}>
                Project
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('contact')}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
