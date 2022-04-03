import React from "react";
import './styles/styles.css';
import logo from './assets/Logo.png';
import covidBg from './assets/covid-bg.png';
import MenuBar from "./MenuBar";

export default () => (
	<>
		<div className="home">
			<img src={covidBg} alt="covid virus image" className="home__bg-img" />
			<MenuBar />
			<div>
				<img src={logo} className="home__logo-img"></img>
				
			</div>
			<div className="header-content-wrapper">
			<div className="header-content">
				<div className="header">
					<h1>COVITech</h1>
				</div>
				<div className="content">
					<p>An innovative solution to combat the spread of COVID-19.</p>
				</div>
				<div className="buttons">
					{/* <button>Statistics</button>
					<button>Tracing</button>
					<button>Vaccines</button> */}
				</div>
			</div>
			</div>
		</div>
	</>
);
