import React from 'react'
import C from "../Image/C.png"
import Cplusplus from "../Image/C++.png"
import javascript from "../Image/javascript.png"
import Html from "../Image/HTML.png"
import CSS from "../Image/CSS.png"
import BootStrap from "../Image/bootstrap.png"
import ReactJs from "../Image/React.png"
import Redux from "../Image/Redux.png"
import TailwindCss from "../Image/tailwindcss.png"
import Postman from "../Image/postman.png"
import Postgres from "../Image/postgres.png"
import Node from "../Image/node.png"
import Git from "../Image/Git.png"
import Github from "../Image/github.png"
import Mongodb from "../Image/mongodb.png"
import Markdown from "../Image/MarkDown.png"
import MySql from "../Image/mysql.png"
import Express from "../Image/express.png"
import { ReactComponent as SvgIcon } from '../Image/stackoverflow_icon.svg'
import './TechStack.css';
const TechStack = () => {
  return (
    <>
    <div className="container tech-stack-container">
      <SvgIcon />
      <h1 className="heading">Tech Stack</h1>
      </div>
      <div className="icon-container container">
        <img alt="C" src={C}></img>
        <img alt="C" src={Cplusplus}></img>
        <img alt="C" src={Html}></img>
        <img alt="C" src={CSS}></img>
        <img alt="C" src={BootStrap}></img>
        <img alt="C" src={TailwindCss}></img>
        <img alt="C" src={javascript}></img>
        <img alt="C" src={ ReactJs}></img>
        <img alt="C" src={Redux}></img>
        <img alt="C" src={Git}></img>
        <img alt="C" src={Github}></img>
        <img alt="C" src={Node}></img>
        <img alt="C" src={Express}></img>
        <img alt="C" src={Postgres}></img>
        <img alt="C" src={MySql}></img>
        <img alt="C" src={Mongodb}></img>
        <img alt="C" src={Markdown}></img>
        <img alt="C" src={Postman}></img>
      </div>
      </>
  )
}

export default TechStack