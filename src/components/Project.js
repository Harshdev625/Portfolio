import React from "react";
import "./Project.css";
import Todolist from "../Image/TodoList1.png";
import BootStrap from "../Image/bootstrap.png";
import ReactJs from "../Image/React.png";
import CSS from "../Image/CSS.png";
import Projects from "../Image/Projects.png";
const Project = () => {
  return (
    <div className="container">
      <div className="stack-container" id="project">
        <img className="" src={Projects} alt="Projects" />
        <h1>Project</h1>
      </div>
      <div className="project-handler">
        <div className="conatiner">
          <img className="project-Img" src={Todolist} alt="TodoList" />
        </div>
        <div className="project-detail">
          <div>
            <h3 className="stack-container ">To Do List</h3>
          </div>
          <div className="project-breif">
            <h4>
            The To-Do List Projeet is a comprehensive task management application designed to help individuals and teams organize, prioritize, and track their daily activities efficiently. 
            </h4>
          </div>
          <div >
            <h3>Tech Stack Used:</h3>
            <div className="project-icon-container">
            <img className="grow" alt="BootStrap" src={BootStrap}></img>
            <img className="grow" alt="ReactJs" src={ReactJs}></img>
            <img className="grow" alt="CSS" src={CSS}></img>
            </div>
            <div >
              <button className="Project-Button grow"><a className="Project-link" href="/" target="_blank" rel="noreferrer">See Live</a></button>
              <button className="Project-Button grow"><a className="Project-link" href="https://github.com/Harshdev625/todolist" target="_blank" rel="noreferrer">View Code</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
