import React, { useState, useNavigate } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { CssBaseline, Typography } from "@mui/material";

const APIURL = "https://fitnesstrac-kr.herokuapp.com/api";

const Login = ({ setToken }) => {
	console.log(APIURL, "/users/login");

	// login
	async function userLogin(username, password) {
		return fetch(`${APIURL}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: {
					username: username,
					password: password,
				},
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				return result.data.token;
			})
			.catch(console.error);
	}

	const history = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const token = await userLogin(username, password);
			if (token) {
				sessionStorage.setItem("token", JSON.stringify(token));
				setToken(token);
				history("/Homepage");
				alert("You are logged in!");
			} else {
				alert("Username or passowrd are incorrect");
			}
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 15,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component='h1' variant='h4'>
					Login
				</Typography>
				<Box component='form' onSubmit={handleSubmit}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='outlined'
						label='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					></TextField>
					<TextField
						margin='normal'
						required
						fullWidth
						id='outlined-required'
						label='Password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></TextField>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Login
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

function Register({ setToken }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const [token, setToken] = useState("");
	const history = useNavigate();

	const handleRegister = async (username, password) => {
		try {
			const response = await fetch(`${APIURL}/users/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					user: { username: username, password: password },
				}),
			});
			const result = await response.json();
			return result;
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await handleRegister(username, password);
		const token = result.data.token;
		console.log("token", token);
		// console.log("setToken", setToken);
		sessionStorage.setItem("token", JSON.stringify(token));
		// setToken(token);
		history("/Homepage");
		alert("You have created a new user!");
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 15,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component='h1' variant='h4'>
					Create Account
				</Typography>
				<Box component='form' onSubmit={handleSubmit}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='outlined-required'
						label='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					></TextField>
					<TextField
						margin='normal'
						required
						fullWidth
						id='outlined-required'
						label='Password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></TextField>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Register
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

export { Login, Register };
