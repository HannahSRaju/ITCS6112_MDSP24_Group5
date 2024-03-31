import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import MaterialIcons from "../../components/MaterialIcons";
import { birthdayBKG, photographer, venue, florist, planner,caterer } from "../../utils/images";
import "./birthday.css";

const Birthday = () => {
	const navigate = useNavigate();

	return (
		<div style={{position: 'relative'}}>
			<div
				style={{
					backgroundImage: `url(${birthdayBKG})`,
					backgroundSize: "cover",
					opacity: "0.3",
					position: "absolute",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%",
					zIndex: -1,
				}}
			></div>
			<div className="blockss">
				<li
					className="list-item"
					style={{
						backgroundImage: `url(${venue})`,
					}}
				>
					<p style={{backgroundColor: 'white', padding: '20px'}}>Venues</p>
				</li>
				<li
					className="list-item"
					style={{
						backgroundImage: `url(${caterer})`,
					}}
				>
					<p style={{backgroundColor: 'white', padding: '20px'}}>Caterers</p>
				</li>
				<li
					className="list-item"
					style={{
						backgroundImage: `url(${florist})`,
					}}
				>
					<p style={{backgroundColor: 'white', padding: '20px'}}>Florists</p>
				</li>
				<li
					className="list-item"
					style={{
						backgroundImage: `url(${photographer})`,
					}}
				>
					<p style={{backgroundColor: 'white', padding: '20px'}}>Photographers</p>
				</li>
				<li
					className="list-item"
					style={{
						backgroundImage: `url(${planner})`,
					}}
				>
					<p style={{backgroundColor: 'white', padding: '20px'}}>Planners</p>
				</li>
			</div>
		</div>
	);
};

export default Birthday;
