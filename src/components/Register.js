import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { CssBaseline, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const APIURL = "https://fitnesstrac-kr.herokuapp.com/api";

function Register({ setToken, setIsLoggedIn }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const history = useNavigate();

	async function handleRegister(username, password) {
		try {
			return await fetch(`${APIURL}/users/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					user: {
						username: username,
						password: password,
					},
				}),
			})
				.then((response) => response.json())
				.then((result) => {
					console.log("result from handleRegister", result);
					return result;
				});
		} catch (error) {
			console.log(error);
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await handleRegister(username, password);
		console.log("result", result);
		const token = result.data.token;
		console.log("token", token);
		console.log("setToken", setToken);
		sessionStorage.setItem("token", JSON.stringify(token));
		setToken(token);
		setIsLoggedIn(true);
		history("/");
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

export default Register;
