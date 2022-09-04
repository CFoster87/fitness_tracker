import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Route, Routes } from "react-router-dom";

import { Activities, Home, Login, Navbar, Routines } from "./components";

function App() {
	const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/";
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
						/>
					}
				>
					<Route exact path='/routines' element={<Routines />}>
						Routines
					</Route>
					<Route
						exact
						path='/activities'
						element={<Activities isLoggedIn={isLoggedIn} />}
					>
						Activities
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
