import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import {
	Activities,
	Home,
	Register,
	Routines,
	MyRoutines
} from "./components";

function App() {
	const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/";
	const [isLoggedIn, setIsLoggedIn] = useState("");
	const [token, setToken] = useState("");
	const [modifyRoutine, setModifyRoutine] = useState("")

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
				<Route
					exact
					path='/my_routines'
					element={
						<MyRoutines
							setModifyRoutine={setModifyRoutine}
							token={token}
						/>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
