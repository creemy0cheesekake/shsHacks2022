import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";

import "../styles/menu-bar.css";

export default () => (
	<>
		<div className="home__menubar">
			<img src={logo} className="home__logo-img"></img>

			<ul>
				<li>
					<Link to="/testing">Testing</Link>
				</li>
				<li>
					<Link to="/vaccination">Vaccination</Link>
				</li>
				<li>
					<Link to="/tracing">Tracing</Link>
				</li>
				<li>
					<Link to="/statistics">Statistics</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</div>
	</>
);
