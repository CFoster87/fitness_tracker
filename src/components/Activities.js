import React, { useEffect, useState } from "react";

const Activities = (isLoggedIn) => {
	// FOR UNREGISTERED USERS
	//see a list of all activities which have been created.
	// FOR REGISTERED USER
	// be shown a form to create a new activity by name and description.
	// be shown an error if that activity already exists.
	// STRETCH GOALS
	// as ANY USER be able to click on an activity name and see a list of public routines which feature it.
	// as a REGISTERED USER be able to edit an existing activity and update the description regardless of who owns it.

	const [activities, setActivities] = useState([]);

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

	return (
		<body style={postStyle.body}>
			<h1 style={postStyle.title}> Activities </h1>

			{activities.map((activity) => {
				return (
					<div style={postStyle.card} key={activity._id}>
						<h2>{activity.name}</h2>
						<p>{activity.description}</p>
					</div>
				);
			})}
		</body>
	);
};

export default Activities;
