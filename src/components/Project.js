import React from "react";
import Html from "../Image/HTML.png";
import Todolist from "../Image/TodoList1.png";
import NewsMonkey from "../Image/NewsMonkey.png";
import BootStrap from "../Image/bootstrap.png";
import ReactJs from "../Image/React.png";
import javascript from "../Image/javascript.png";
import Vercel from "../Image/Vercel.png";
import CSS from "../Image/CSS.png";
import Projects from "../Image/Projects.png";
import Node from "../Image/node.png";
import Mongodb from "../Image/mongodb.png";
import Express from "../Image/express.png";
import FRB from "../Image/Face Recognition Brain.mp4";
import PG from "../Image/Password Generator.png";
const Project = () => {
  return (
    <>
      <div className="container" id="project">
        <div className="stack-container">
          <img className="" src={Projects} alt="Projects" />
          <h1>Project</h1>
        </div>
        <div className="project-handler">
          <div className="conatiner">
            <video className="project-Img" src={FRB} controls></video>
          </div>
          <div className="project-detail">
            <div>
              <h3 className="stack-container project-heading">Face Recognition Brain</h3>
            </div>
            <div className="project-brief">
              <h5>
                Face Recognition Brain is an application built using the MERN
                stack. The purpose of this application is to detect and
                recognize faces within images using the advanced face
                recognition capabilities provided by the Clarifai API.
              </h5>
            </div>
            <div>
              <h3 className="text-center">Tech Stack Used:</h3>
              <div className="project-icon-container">
                <img className="grow" alt="Html" src={Html}></img>
                <img className="grow" alt="CSS" src={CSS}></img>
                <img className="grow" alt="javascript" src={javascript}></img>
                <img className="grow" alt="BootStrap" src={BootStrap}></img>
                <img className="grow" alt="ReactJs" src={ReactJs}></img>
                <img className="grow" alt="Node" src={Node}></img>
                <img className="grow" alt="Express" src={Express}></img>
                <img className="grow" alt="Mongodb" src={Mongodb}></img>
                <img className="grow" alt="Vercel" src={Vercel}></img>
              </div>
              <div className="get-in-touch">
                <button className="Project-Button grow">
                  <a
                    className="Project-link"
                    href="https://face-recognition-brain-omega.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                  </a>
                </button>
                <button className="Project-Button grow">
                  <a
                    className="Project-link"
                    href="https://github.com/Harshdev625/Face-Recognition-Brain"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-handler">
          <div className="conatiner">
            <img className="project-Img" src={NewsMonkey} alt="NewsMonkey" />
          </div>
          <div className="project-detail">
            <div>
              <h3 className="stack-container project-heading">NewsMonkey</h3>
            </div>
            <div className="project-brief">
              <h5>
                The NewsMonkey website is a comprehensive online platform that
                delivers the latest news and information to users from across
                the globe. With its user-friendly interface and extensive
                coverage of various topics, the website aims to keep individuals
                well-informed and engaged with current events.
              </h5>
            </div>
            <div>
              <h3 className="text-center">Tech Stack Used:</h3>
              <div className="project-icon-container">
                <img className="grow" alt="Html" src={Html}></img>
                <img className="grow" alt="CSS" src={CSS}></img>
                <img className="grow" alt="javascript" src={javascript}></img>
                <img className="grow" alt="BootStrap" src={BootStrap}></img>
                <img className="grow" alt="ReactJs" src={ReactJs}></img>
                <img className="grow" alt="Vercel" src={Vercel}></img>
              </div>
              <div className="get-in-touch">
                <button className="Project-Button grow">
                  <a
                    className="Project-link"
                    href="https://github.com/Harshdev625/newsmonkey"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-handler">
          <div className="conatiner">
            <img className="project-Img" src={Todolist} alt="TodoList" />
          </div>
          <div className="project-detail">
            <div>
              <h3 className="stack-container project-heading">To Do List</h3>
            </div>
            <div className="project-brief">
              <h5>
                The To-Do List Projeet is a comprehensive task management
                application designed to help individuals and teams organize,
                prioritize, and track their daily activities efficiently.
              </h5>
            </div>
            <div>
              <h3 className="text-center">Tech Stack Used:</h3>
              <div className="project-icon-container">
                <img className="grow" alt="Html" src={Html}></img>
                <img className="grow" alt="CSS" src={CSS}></img>
                <img className="grow" alt="javascript" src={javascript}></img>
                <img className="grow" alt="BootStrap" src={BootStrap}></img>
                <img className="grow" alt="ReactJs" src={ReactJs}></img>
                <img className="grow" alt="Vercel" src={Vercel}></img>
              </div>
              <div className="get-in-touch">
                <button className="Project-Button grow">
                  <a
                    className="Project-link"
                    href="https://harshdev625.github.io/todolist/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                  </a>
                </button>
                <button className="Project-Button grow">
                  <a
                    className="Project-link"
                    href="https://github.com/Harshdev625/todolist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-handler">
          <div className="conatiner">
            <img className="project-Img" src={PG} alt="Password Generator" />
          </div>
          <div className="project-detail">
            <div>
              <h3 className="stack-container project-heading">Password Generator</h3>
            </div>
            <div className="project-brief">
              <h5>
                The Password Generator is a web-based application that allows
                users to generate strong and secure passwords. It provides an
                easy-to-use interface where users can customize various
                parameters to create passwords that meet their specific
                requirements.
              </h5>
            </div>
            <div>
              <h3 className="text-center">Tech Stack Used:</h3>
              <div className="project-icon-container">
                <img className="grow" alt="Html" src={Html}></img>
                <img className="grow" alt="CSS" src={CSS}></img>
                <img className="grow" alt="javascript" src={javascript}></img>
                <img className="grow" alt="Vercel" src={Vercel}></img>
              </div>
              <div className="get-in-touch">
                <button className="Project-Button grow">
                  <a
                    className="Project-link"
                    href="https://password-generator-beta-seven.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                  </a>
                </button>
                <button className="Project-Button grow">
                  <a
                    className="Project-link"
                    href="https://github.com/Harshdev625/Password-Generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
