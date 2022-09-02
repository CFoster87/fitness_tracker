import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { default as Login } from "./Login";
import { default as Register } from "./Register";
import { default as Routines } from "./Routines";
import { default as Activities } from "./Activities";
import { default as MyRoutines } from "./MyRoutines";

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
	if (!isLoggedIn) {
		return (
			<div>
				<Login setToken={setToken} />
				<Register setToken={setToken} />
				<Link to='/routines'>Routines</Link>
				<Link to='/activities'>Activites</Link>

				<Routes>
					<Route exact path='/routines' element={<Routines />}>
						Routines
					</Route>
					<Route exact path='/activities' element={<Activities />}>
						Activities
					</Route>
				</Routes>
			</div>
		);
	} else {
		return (
			<div>
				<Link to='/routines'>Routines</Link>
				<Link to='/my_routines'>My Routines</Link>
				<Link to='/activities'>Activites</Link>

				<Routes>
					<Route exact path='/routines' element={<Routines />}>
						Routines
					</Route>
					<Route exact path='/activities' element={<Activities />}>
						Activities
					</Route>
					<Route exact path='/my_routines' element={<MyRoutines />}>
						Activities
					</Route>
				</Routes>
			</div>
		);
	}
};

export default Home;
