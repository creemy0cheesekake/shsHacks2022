import React from 'react';
import "../styles/stats.css";
import logo from "../assets/Logo.png";
import covidStatsBg from "../assets/covid-stats-bg.png";
import ok1 from "../assets/ok1.png";
import MenuBar from "./MenuBar";

function Tracing() {
  return (
    <div className="stats">
      <img src={ok1} alt="covid virus image" className="stats__bg-img" />
      <MenuBar />
      <div>
        <h3>Tracing</h3>
      </div>
    </div>
  );
}

export default Tracing;
