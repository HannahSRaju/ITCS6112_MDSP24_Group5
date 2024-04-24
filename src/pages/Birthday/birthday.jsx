import React from "react";
import { Link } from "react-router-dom";
import { birthdayBKG, photographer, venue, florist, planner, caterer } from "../../utils/images";
import "./birthday.css";
import { venueData } from "./VenuesB.mjs";
import { bakerData } from "./BakersB.mjs";
import { decoratorData } from "./DecoratorsB.mjs"; // Updated import
import { photographerData } from "./Photographers.mjs";
//import { plannerData } from "./Planners.mjs";

const Birthday = () => {
    // Convert objects to arrays
    const venuesArray = Object.values(venueData);
    const bakersArray = Object.values(bakerData);
    const decoratorsArray = Object.values(decoratorData); // Updated variable name
    const photographersArray = Object.values(photographerData);
    //const plannersArray = Object.values(plannerData);

    return (
        <div className="birthday-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${birthdayBKG})`,
                }}
            ></div>
            <div className="blockss-birth">
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
                            {/*<p>Service Type: {venue.ServiceType}</p>*/}
                            <p>Starting Price: {venue.StartingPrice}</p>
                            <p>Contact: {venue.Contact}</p>
                            <p>Webpage: <a href={venue.Webpage}>{venue.Webpage}</a></p>
                            <p>Review: {venue.Review}</p>
                        </div>
                    ))}
                </div>

                {/* Bakers */}
                <div className="list-item" style={{ backgroundImage: `url(${caterer})` }}>
                    <p className="category-title">Bakers</p>
                </div>
                <div className="vendor-details">
                    {bakersArray.map((baker, index) => (
                        <div key={index} className="vendor-item">
                            <h3>{baker.BakerName}</h3>
                            <p>Location: {baker.Location}</p>
                            <p>Starting Price: {baker.StartingPrice}</p>
                            <p>Contact: {baker.Contact}</p>
                            <p>Webpage: <a href={baker.Webpage}>{baker.Webpage}</a></p>
                            <p>Review: {baker.Review}</p>
                        </div>
                    ))}
                </div>

                {/* Decorators */}
                <div className="list-item" style={{ backgroundImage: `url(${florist})` }}>
                    <p className="category-title">Decorators</p>
                </div>
                <div className="vendor-details">
                    {decoratorsArray.map((decorator, index) => (
                        <div key={index} className="vendor-item">
                            <h3>{decorator.BakerName}</h3> {/* Assuming BakerName is a typo and should be DecoratorName */}
                            <p>Location: {decorator.Location}</p>
                            <p>Starting Price: {decorator.StartingPrice}</p>
                            <p>Contact: {decorator.Contact}</p>
                            <p>Webpage: <a href={decorator.Webpage}>{decorator.Webpage}</a></p>
                            <p>Review: {decorator.Review}</p>
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
                
                {/*
                Planners
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
                */}
            </div>
        </div>
    );
};

export default Birthday;
