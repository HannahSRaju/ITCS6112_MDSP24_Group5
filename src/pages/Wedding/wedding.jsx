import React from "react";
import { Link } from "react-router-dom";
import {
	venue,
	caterer,
	florist,
	photographer,
	planner,
} from "../../utils/images";
import "./wedding.css";

const Wedding = () => {
	return (
		<div className="wedding-container">
			<Link to="/wedding/venues">
				<div className="blockss">
					{/* Venues */}
					<div
						className="list-item"
						style={{ backgroundImage: `url(${venue})` }}
					>
						<p className="category-title">Venues</p>
					</div>
					<br />
				</div>
			</Link>
			<Link to="/wedding/caterers">
				<div className="blockss">
					{/* Caterers */}
					<div
						className="list-item"
						style={{ backgroundImage: `url(${caterer})` }}
					>
						<p className="category-title">Caterers</p>
					</div>
					<br />
				</div>
			</Link>
			<Link to="/wedding/florists">
				<div className="blockss">
					{/* Florists */}
					<div
						className="list-item"
						style={{ backgroundImage: `url(${florist})` }}
					>
						<p className="category-title">Florists</p>
					</div>
					<br />
				</div>
			</Link>
			<Link to="/wedding/photographers">
				<div className="blockss">
					{/* Photographers */}
					<div
						className="list-item"
						style={{ backgroundImage: `url(${photographer})` }}
					>
						<p className="category-title">Photographers</p>
					</div>
					<br />
				</div>
			</Link>
			<Link to="/wedding/planners">
				<div className="blockss">
					{/* Planners */}
					<div
						className="list-item"
						style={{ backgroundImage: `url(${planner})` }}
					>
						<p className="category-title">Planners</p>
					</div>
					{/* <div className="vendor-details">
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
                    </div> */}
					<br />
				</div>
			</Link>
		</div>
	);
};

export default Wedding;
