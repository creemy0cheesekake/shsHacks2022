import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Testing from "./components/Testing";
import Tracing from "./components/Tracing";
import Vaccination from "./components/Vaccination";

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/statistics" element={<Statistics />} />  
        <Route path="/tracing" element={<Tracing />} />
        <Route path="/vaccination" element={<Vaccination />} />
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );
  
  
