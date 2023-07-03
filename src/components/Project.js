import React from "react";
import "./Project.css";
import Todolist from "../Image/TodoList1.png";
import Github from "../Image/github.png";
import Direct from "../Image/Direct.png";
import BootStrap from "../Image/bootstrap.png";
import ReactJs from "../Image/React.png";
import CSS from "../Image/CSS.png";
import Projects from "../Image/Projects.png";
const Project = () => {
  return (
    <div className="container " id="project">
      <div className="container tech-stack-container">
        <img className="" src={Projects} alt="Projects" />
        <h1>Project</h1>
      </div>
      <div className="project-handler">
        <img className="Project-Overview" src={Todolist} alt="TodoList" />
        <div className="Project-detail">
          <h6>Featured Project</h6>
          <h3>To Do List</h3>
          <img className="website-display grow" alt="Direct" src={Direct}></img>
          <img className="website-display grow" alt="Github" src={Github}></img>
          <p>
            The To Do List project is a simple task management application that
            allows users to create and manage their to-do items efficiently.{" "}
          </p>
          <div className="brief-info">
            <h3>Tech Stack Used:</h3>
            <img
              className="website-display grow"
              alt="BootStrap"
              src={BootStrap}
            ></img>
            <img
              className="website-display grow"
              alt="ReactJs"
              src={ReactJs}
            ></img>
            <img className="website-display grow" alt="CSS" src={CSS}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
