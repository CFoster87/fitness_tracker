import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Route, Routes } from "react-router-dom";

import { Activities, Home, Login, Navbar, Routines } from "./components";

function App() {
	const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/";

	return (
		<div className='App'>
			<header>
				<h1>Hello World</h1>
			</header>

			<body>
				<Routes>
					<Route exact path='/' element={<Home apiurl={APIURL} />}></Route>
				</Routes>
			</body>
		</div>
	);
}

export default App;
