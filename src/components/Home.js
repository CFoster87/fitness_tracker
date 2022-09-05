import React from "react";
import { Outlet, Link } from "react-router-dom";
import { default as Login } from "./Login";

const Home = (props) => {
	const { isLoggedIn, setIsLoggedIn, setToken } = props


	const logOutUser = () => {
		setToken("")
		sessionStorage.clear()
		setIsLoggedIn(false)
	}

	if (isLoggedIn) {
		return (
			<div>
				<Link to='/routines'>Routines</Link>
				<Link to='/my_routines'>My Routines</Link>
				<Link to='/activities'>Activites</Link>
				<button  onClick={logOutUser}>
							Logout
						</button>
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
