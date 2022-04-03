import React from "react";

import "../styles/stats.css";
import logo from "../assets/Logo.png";
import covidStatsBg from "../assets/covid-stats-bg.png";

import MenuBar from "./MenuBar";

function Statistics() {
	return (
		<div className="stats">
			<img src={covidStatsBg} alt="covid virus image" className="stats__bg-img" />
			<MenuBar />

			<div className="header-content-wrapper">
				<div className="header-content">
					<div className="header">
						<h1>Statistics</h1>
					</div>
					<div className="content">
						<p>11.2 billion COVID-19 vaccines have been administered.</p>
						<div className="iframes">
							<iframe
								src="https://public.domo.com/cards/YE040"
								className="chart"
								marginHeight="0"
								marginWidth="0"
								frameBorder="0"></iframe>
							<iframe
								src="https://public.domo.com/cards/dwoBJ"
								marginHeight="0"
								marginWidth="0"
								frameBorder="0"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
  }

  export default Statistics;
