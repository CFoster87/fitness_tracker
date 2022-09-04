import React, { useState } from "react";
import { Outlet, Link, Route, Routes } from "react-router-dom";
import { default as Login } from "./Login";
import { default as Register } from "./Register";
import { default as Routines } from "./Routines";
import { default as Activities } from "./Activities";
import { default as MyRoutines } from "./MyRoutines";

//import login/signup, Routines and Activities

const Home = ({ isLoggedIn, setIsLoggedIn, token, setToken }) => {
	const [user, setUser] = useState("");
	console.log("token from Home ", token);
	// FOR UNREGISTERED VISITOR
	// show signin/signup
	// see tabbed navigation for Routines and Activities
	// FOR REGISTERED USERS
	//login
	//stay logged in between pages
	// logout if logged in
	// see tabbed navigations for Routines, My Routines, and Activities
	if (isLoggedIn) {
		return (
			<div>
				<Link to='/routines'>Routines</Link>
				<Link to='/my_routines'>My Routines</Link>
				<Link to='/activities'>Activites</Link>
			</div>
		);
	} else {
		return (
			<div>
				<Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
				<Link to='/register'>Register Here</Link>
				<Link to='/routines'>Routines</Link>
				<Link to='/activities'>Activites</Link>
				<Outlet />
			</div>
		);
	}
};

export default Home;
