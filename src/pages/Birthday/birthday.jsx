import React from "react";
import { Link } from "react-router-dom";
import { birthdayBKG, photographer, venue, florist, planner, caterer } from "../../utils/images";
import "./birthday.css";
import { venueData } from "./Venues.mjs";
import { catererData } from "./Caterers.mjs";
import { floristData } from "./Florists.mjs";
import { photographerData } from "./Photographers.mjs";
import { plannerData } from "./Planners.mjs";

const Birthday = () => {
    // Convert objects to arrays
    const venuesArray = Object.values(venueData);
    const caterersArray = Object.values(catererData);
    const floristsArray = Object.values(floristData);
    const photographersArray = Object.values(photographerData);
    const plannersArray = Object.values(plannerData);

    return (
        <div className="birthday-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${birthdayBKG})`,
                }}
            ></div>
            <div className="blockss">
                {/* Venues */}
                <div className="list-item" style={{ backgroundImage: `url(${venue})` }}>
                    <p className="category-title">Venues</p>
                </div>
                <div className="vendor-details">
                    {venuesArray.map((venue, index) => (
                        <div key={index} className="vendor-item">
                            <h3>{venue.VenueName}</h3>
                            <p>Location: {venue.Location}</p>
                            <p>Guest Capacity: {venue.GuestCapacity}</p>
                            <p>Service Type: {venue.ServiceType}</p>
                            <p>Starting Price: {venue.StartingPrice}</p>
                            <p>Contact: {venue.Contact}</p>
                            <p>Webpage: <a href={venue.Webpage}>{venue.Webpage}</a></p>
                            <p>Review: {venue.Review}</p>
                        </div>
                    ))}
                </div>

                {/* Caterers */}
                <div className="list-item" style={{ backgroundImage: `url(${caterer})` }}>
                    <p className="category-title">Caterers</p>
                </div>
                <div className="vendor-details">
                    {caterersArray.map((caterer, index) => (
                        <div key={index} className="vendor-item">
                            <h3>{caterer.CatererName}</h3>
                            <p>Location: {caterer.Location}</p>
                            <p>Starting Price: {caterer.StartingPrice}</p>
                            <p>Contact: {caterer.Contact}</p>
                            <p>Webpage: <a href={caterer.Webpage}>{caterer.Webpage}</a></p>
                            <p>Review: {caterer.Review}</p>
                        </div>
                    ))}
                </div>

                {/* Florists */}
                <div className="list-item" style={{ backgroundImage: `url(${florist})` }}>
                    <p className="category-title">Florists</p>
                </div>
                <div className="vendor-details">
                    {floristsArray.map((florist, index) => (
                        <div key={index} className="vendor-item">
                            <h3>{florist.FloristName}</h3>
                            <p>Location: {florist.Location}</p>
                            <p>Starting Price: {florist.StartingPrice}</p>
                            <p>Contact: {florist.Contact}</p>
                            <p>Webpage: <a href={florist.Webpage}>{florist.Webpage}</a></p>
                            <p>Review: {florist.Review}</p>
                        </div>
                    ))}
                </div>

                {/* Photographers */}
                <div className="list-item" style={{ backgroundImage: `url(${photographer})` }}>
                    <p className="category-title">Photographers</p>
                </div>
                <div className="vendor-details">
                    {photographersArray.map((photographer, index) => (
                        <div key={index} className="vendor-item">
                            <h3>{photographer.Photographer}</h3>
                            <p>Location: {photographer.Location}</p>
                            <p>Style: {photographer.Style}</p>
                            <p>Starting Price: {photographer.StartingPrice}</p>
                            <p>Contact: {photographer.Contact}</p>
                            <p>Webpage: <a href={photographer.Webpage}>{photographer.Webpage}</a></p>
                            <p>Review: {photographer.Review}</p>
                        </div>
                    ))}
                </div>

                {/* Planners */}
                <div className="list-item" style={{ backgroundImage: `url(${planner})` }}>
                    <p className="category-title">Planners</p>
                </div>
                <div className="vendor-details">
                    {plannersArray.map((planner, index) => (
                        <div key={index} className="vendor-item">
                            <h3>{planner.PlannerName}</h3>
                            <p>Location: {planner.Location}</p>
                            <p>Number of Services: {planner.NumServices}</p>
                            <p>Starting Price: {planner.StartingPrice}</p>
                            <p>Contact: {planner.Contact}</p>
                            <p>Webpage: <a href={planner.Webpage}>{planner.Webpage}</a></p>
                            <p>Review: {planner.Review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Birthday;

/** import React, { useContext, useEffect, useState } from "react";
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

export default Birthday; */
