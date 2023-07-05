import React from 'react';
import './CompetitiveLife.css';
import Leetcode from "../Image/leetcode.png";
import Hackerrank from "../Image/HackerRank.png";
import Codechef from "../Image/codechef.png";
import Codeforce from "../Image/codeforces.png";

const CompetitiveLife = () => {
  return (
    <div className="shifting" >
      <a href="https://leetcode.com/Harshdev625/" target="_blank" rel="noreferrer">
        <img  className="social-icon grow" alt="Leetcode" src={Leetcode}></img>
      </a>
      <a href="https://www.hackerrank.com/Harshdev625?hr_r=15" target="_blank" rel="noreferrer">
        <img  className="social-icon grow" alt="Hackerrank" src={Hackerrank}></img>
      </a>
      <a href="https://www.codechef.com/users/mr_stark_3000" target="_blank" rel="noreferrer">
        <img  className="social-icon grow" alt="Codechef" src={Codechef}></img>
      </a>
      <a href="https://codeforces.com/profile/harshdev625" target="_blank" rel="noreferrer">
        <img  className="social-icon grow" alt="Codeforce" src={Codeforce}></img>
      </a>
    </div>
  );
};

export default CompetitiveLife;
