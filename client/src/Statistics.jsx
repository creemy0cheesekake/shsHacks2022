import React from "react";

import "./styles/stats.css";
import logo from "./assets/Logo.png";
import covidStatsBg from "./assets/covid-stats-bg.png";

import MenuBar from "./MenuBar";

export default () => (
	<>
		<div className="stats">
			<img
				src={covidStatsBg}
				alt="covid virus image"
				className="stats__bg-img"
			/>
			 <MenuBar />
			 <iframe src="https://public.domo.com/cards/YE040" className = "chart" width="900" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
		
			<div className="header-content-wrapper">
				<div className="header-content">
					
					<div className="header">
						<h1>Statistics</h1>
					</div>
					<div className="content">
						<p>
							11.2 billion COVID-19 vaccines have been administered.
						</p>
					</div>
					<iframe src="https://public.domo.com/cards/dwoBJ" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
				</div>
			</div> 
			
		</div>
	</>
);
