import React from "react";

import logo from "./assets/Logo.png";

import "./styles/menu-bar.css";

export default () => (
	<>
		<div className="home__menubar">
			<img src={logo} className="home__logo-img"></img>

			<ul>
				<li>
					<a href="#">Testing</a>
				</li>
				<li>
					<a href="#">Vaccination</a>
				</li>
				<li>
					<a href="#">Tracing</a>
				</li>
				<li>
					<a href="#">Statistics</a>
				</li>
				<li>
					<a href="#">Home</a>
				</li>
			</ul>
		</div>
	</>
);
