import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Login, Register } from "./Login";
//import login/signup, Routines and Activities

const Home = ({ APIURL }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState("");
	// FOR UNREGISTERED VISITOR
	// show signin/signup
	// see tabbed navigation for Routines and Activities
	// FOR REGISTERED USERS
	//login
	//stay logged in between pages
	// logout if logged in
	// see tabbed navigations for Routines, My Routines, and Activities

	return (
		<div>
			<header>
				<h1>Hello World</h1>
			</header>

			{/* <Login setToken={setToken} APIURL={APIURL} /> */}
			{/* <Register setToken={setToken} APIURL={APIURL} /> */}
		</div>
	);
};

export default Home;
