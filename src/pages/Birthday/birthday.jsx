import React from "react";
import { Link } from "react-router-dom";
import { venue, florist, caterer } from "../../utils/images";
import "./birthday.css";
import { venueData } from "./VenuesB.mjs";
import { bakerData } from "./BakersB.mjs";
import { decoratorData } from "./DecoratorsB.mjs";

const Birthday = () => {
	// Convert objects to arrays
	const venuesArray = Object.values(venueData);
	const bakersArray = Object.values(bakerData);
	const decoratorsArray = Object.values(decoratorData);

	return (
		<div className="birthday-container">
			<Link to="/birthday/bdayVenues">
				<div className="blocks-birth">
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

			<Link to="/birthday/bakers">
				<div className="blocks-birth">
					{/* Bakers */}
					<div
						className="list-item"
						style={{ backgroundImage: `url(${caterer})` }}
					>
						<p className="category-title">Bakers</p>
					</div>
					<br />
				</div>
			</Link>
			<Link to="/birthday/decorators">
				<div className="blocks-birth">
					{/* Decorators */}
					<div
						className="list-item"
						style={{ backgroundImage: `url(${florist})` }}
					>
						<p className="category-title">Decorators</p>
					</div>
					<br />
				</div>
			</Link>
		</div>
	);
};

export default Birthday;
