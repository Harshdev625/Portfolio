import React,{useState} from "react";
import Typewriter from "typewriter-effect";
import Resume from '../Resume/Harsh Dev.pdf'
const Home = () => {
  const [download, setdownload] = useState(false)
  return (
    <div className="container" id="home">
      <div className="brief-detail">
        <h5 className="textstyle1">Hi, I'am</h5>
        <h1 className="my-name">Harsh Dev,</h1>
        <h1> I'm a </h1>
        <h2 style={{ color: "aqua" }}>
          <Typewriter
            options={{
              strings: ["Student", "Web Developer", "Competitive Programmer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h4 className="textsytle2">
          I am a third-year student pursuing an Integrated Postgraduate (B.Tech
          + M.Tech) course majoring in IT at IIIT Gwalior (ABV-Indian Institute
          of Information Technology and Management, Gwalior). My interests
          include Full Stack Web Development, Algorithms, Problem Solving, and
          competitive programming.
        </h4>
        <button className="Resume-button" onClick={()=>{setdownload(true)}}>
          <a className="Resume-link" href={Resume} download>
            {download ? 'Thanks For Your Interest' : 'Download Resume' }
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
