import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Route, Routes } from "react-router-dom";

import {
	Activities,
	Home,
	Register,
	Login,
	Navbar,
	Routines,
} from "./components";

function App() {
	const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/";
	const [isLoggedIn, setIsLoggedIn] = useState("");
	const [token, setToken] = useState("");
	console.log("token from app.js ", token)

	return (
		<div className='App'>
			<header></header>

			<Routes>
				<Route
					exact
					path='/'
					element={
						<Home
							apiurl={APIURL}
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							setToken={setToken}
							token={token}
						/>
					}
				></Route>
				<Route exact path='/routines' element={<Routines />}>
					Routines
				</Route>
				<Route
					exact
					path='/activities'
					element={<Activities isLoggedIn={isLoggedIn} token={token} />}
				>
					Activities
				</Route>
				<Route
					exact
					path='/register'
					element={
						<Register setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
