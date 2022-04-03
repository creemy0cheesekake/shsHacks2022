import React from 'react';
import "../styles/stats.css";
import logo from "../assets/Logo.png";
import covidStatsBg from "../assets/covid-stats-bg.png";
import ok2 from "../assets/ok2.png";
import MenuBar from "./MenuBar";

function Vaccination() {
  return (
    <div className="stats">
      <img src={ok2} alt="covid virus image" className="stats__bg-img" />
      <MenuBar />
      <div className="header-content-wrapper">
        <div className="header">
        <div className="header-content">
						</div>
            </div>
    </div>
    </div>
  );
}

export default Vaccination;
