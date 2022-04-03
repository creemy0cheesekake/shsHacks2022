import React from 'react';
import "../styles/stats.css";
import logo from "../assets/Logo.png";
import covidStatsBg from "../assets/covid-stats-bg.png";
import ok from "../assets/ok.png"

import MenuBar from "./MenuBar";

function Testing() {
  return (
    <div className="stats">
      <img src={ok} alt="covid virus image" className="stats__bg-img" />
      <MenuBar />
     
    </div>
  );
}

export default Testing;
