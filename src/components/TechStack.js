import React from "react";
import C from "../Image/C.png";
import Cplusplus from "../Image/C++.png";
import javascript from "../Image/javascript.png";
import Html from "../Image/HTML.png";
import CSS from "../Image/CSS.png";
import BootStrap from "../Image/bootstrap.png";
import ReactJs from "../Image/React.png";
import Redux from "../Image/Redux.png";
import TailwindCss from "../Image/tailwindcss.png";
import Postman from "../Image/postman.png";
import Postgres from "../Image/postgres.png";
import Node from "../Image/node.png";
import Git from "../Image/Git.png";
import Github from "../Image/github.png";
import Mongodb from "../Image/mongodb.png";
import Markdown from "../Image/MarkDown.png";
import MySql from "../Image/mysql.png";
import Express from "../Image/express.png";
import Tech1 from "../Image/Tech1.png";
import ThunderClint from "../Image/Thunder Clint.png"
import "./TechStack.css";
const TechStack = () => {
  return (
    <>
      <div className="container" id="skills">
        <div className="stack-container">
          <img alt="Tech1" src={Tech1}></img>
          <h1>Tech Stack</h1>
        </div>
        <div className="icon-container">
          <img alt="C" src={C}></img>
          <img alt="C++" src={Cplusplus}></img>
          <img alt="Html" src={Html}></img>
          <img alt="CSS" src={CSS}></img>
          <img alt="Bootstrap" src={BootStrap}></img>
          <img alt="TailWindCSS" src={TailwindCss}></img>
          <img alt="Javascript" src={javascript}></img>
          <img alt="ReactJs" src={ReactJs}></img>
          <img alt="Redux" src={Redux}></img>
          <img alt="Git" src={Git}></img>
          <img alt="Github" src={Github}></img>
          <img alt="Node" src={Node}></img>
          <img alt="Express" src={Express}></img>
          <img alt="Postgres" src={Postgres}></img>
          <img alt="MySql" src={MySql}></img>
          <img alt="Mongodb" src={Mongodb}></img>
          <img alt="Postman" src={Postman}></img>
          <img alt="ThunderClint" src={ThunderClint}></img>
          <img alt="Markdown" src={Markdown}></img>
        </div>
      </div>
    </>
  );
};

export default TechStack;
