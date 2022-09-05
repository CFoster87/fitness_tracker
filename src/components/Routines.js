import React, { useEffect, useState } from "react";
import { APIURL } from '../index';

const Routines = ({token}) => {
	// FOR ANY USER
	// see a list of public routines including (routine name, goal and creator's username), a list of activities for the routine (including name, descripiton, duration and/or count)
	// FOR REGISTERED USER
	// be shown a form to create a new routine(form should have text fields with name and goal)
	// for each routine which is owned by ME I should be able to update the name and goal for the routine. Be able to delete the entire routine. Be able to add and activity to a routine via a small form with a dropdown for all activities.
	//and inputs for count and durarion. be able to update the duration or count of any activity. be able to remove any activity from the routine.
	// STRETCH GOALS
	//as ANY USER be able to click on a username(shown as routine creator) and see a list of all their public routines.
	// be able to click on any activity name (shown in a list of activities on a routine) and see a list of all public routines which feature it.
	// as a REGISTERED USER expect the dropdown to add an activity to one of my routines not to include any activity which is already part of the routine.
	const url = "http://fitnesstrac-kr.herokuapp.com/api/routines";

	const [routines, setRoutines] = useState([]);

	useEffect(() => {
		const fetchRoutines = async () => {
			const response = await fetch(url, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			setRoutines(result);
		};

		fetchRoutines();
	}, [token]);

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
			<h1 style={postStyle.title}> Routines </h1>

			{routines.map((routine) => {
				return (
					<div style={postStyle.card} key={routine._id}>
						<h2>{routine.name}</h2>
						<p>{routine.goal}</p>
						<p>{routine.creatorName}</p>
						{routine.activites && <p>Activities: {routine.activities}</p>}
						{/* {routine.activites.map((activity) => {
							return (
								<div>
									<p>{activity.name}</p>
									<p>{activity.description}</p>
									<p>{activity.duration}</p>
									<p>{activity.count}</p>
								</div>
							);
						})} */}
					</div>
				);
			})}
		</body>
	);
};

export default Routines;
