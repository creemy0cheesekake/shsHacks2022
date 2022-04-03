import React from 'react';
import "../styles/stats.css";
import logo from "../assets/Logo.png";
import covidStatsBg from "../assets/covid-stats-bg.png";

import MenuBar from "./MenuBar";

function Testing() {
  return (
    <div className="stats">
      <img src={covidStatsBg} alt="covid virus image" className="stats__bg-img" />
      <MenuBar />
      <div>
        <h3>Testing</h3>
      </div>
    </div>
  );
}

export default Testing;
