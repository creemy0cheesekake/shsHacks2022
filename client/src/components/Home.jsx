import React, { useState, useEffect } from "react";

import "../styles/home.css";
import covidBg from "../assets/covid-bg.png";

import MenuBar from "./MenuBar";

export default () => {
	const [typingText, setTypingText] = useState("");
	useEffect(() => {
		const string = "An innovative solution to combat the spread of COVID-19.";
		let i = 0;
		const interval = setInterval(() => {
			setTypingText(string.slice(0, i + 1));
			i++;
		}, 100);
		if (i > string.length) clearInterval(interval);
	}, []);

	return (
		<>
			<div className="home">
				<img src={covidBg} alt="covid virus image" className="home__bg-img" />
				<MenuBar />

				<div className="header-content-wrapper">
					<div className="header-content">
						<div className="header">
							<h1>COVITech</h1>
						</div>
						<div className="content">
							<p>{typingText}</p>
						</div>
						<div className="content-placeholder">
							<p>An innovative solution to combat the spread of COVID-19.</p>
						</div>
						<div className="buttons"></div>
					</div>
				</div>
			</div>
		</>
	);
};
