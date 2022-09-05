import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Activities = (props) => {
	const {isLoggedIn, token} = props

	// STRETCH GOALS
	// as ANY USER be able to click on an activity name and see a list of public routines which feature it.
	// as a REGISTERED USER be able to edit an existing activity and update the description regardless of who owns it.

	const [activities, setActivities] = useState([]);
	const [activityName, setActivityName] = useState("");
	const [activityDescription, setActivityDescription] = useState("");

	const url = "http://fitnesstrac-kr.herokuapp.com/api/activities";

	useEffect(() => {
		const fetchActivities = async () => {
			const response = await fetch(url, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			setActivities(result);
		};

		fetchActivities();
	}, []);

	const createActivity = async (e) => {
		e.preventDefault();
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: activityName,
				description: activityDescription,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				return result;
			})
			.catch(console.error);
	};

	const postStyle = {
		span: {
			display: "flex",
			backgroundColor: "#ADD8E6",
		},
		body: {
			backgroundColor: "white",
		},
		card: {
			backgroundColor: "#e6f3f8",
			display: "block",
			borderRadius: "30px",
			paddingTop: "5px",
			paddingBottom: "5px",
			paddingLeft: "15px",
			marginBottom: "5px",
		},
		title: {
			padding: "15px",
			color: "blue",
			borderBottom: "2px solid black",
			textAlign: "center",
		},
	};

	if (isLoggedIn) {
		return (
			<div style={postStyle.body}>
							<div>
				<Link to='/'>Home</Link>

			</div>
				<div>
					<h1>Add New Activity</h1>
					<form onSubmit={createActivity}>
						<label>
							<p>Name</p>
							<input
								type='text'
								onChange={(e) => setActivityName(e.target.value)}
							/>
							<p>Description</p>
							<input
								type='text'
								onChange={(e) => setActivityDescription(e.target.value)}
							/>
						</label>
						<button type='submit'>Submit</button>
					</form>
				</div>
				<h1 style={postStyle.title}> Activities </h1>

				{activities.map((activity) => {
					return (
						<div style={postStyle.card} key={activity._id}>
							<h2>{activity.name}</h2>
							<p>{activity.description}</p>
						</div>
					);
				})}
			</div>
		);
	}
	return (
		<div style={postStyle.body}>
			<h1 style={postStyle.title}> Activities </h1>

			{activities.map((activity) => {
				return (
					<div style={postStyle.card} key={activity._id}>
						<h2>{activity.name}</h2>
						<p>{activity.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Activities;
