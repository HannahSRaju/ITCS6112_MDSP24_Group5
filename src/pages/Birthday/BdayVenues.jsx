import React, { useState } from "react";
import { venueData } from "./VenuesB.mjs";
import { filterImg, venue, vendorsBBKG } from "../../utils/images";
import "./birthday.css";

const BdayVenues = () => {
	const [filterCriteria, setFilterCriteria] = useState({
		VenueName: "",
		Location: "",
		GuestCapacity: "",
		Review: "",
	});

	const venuesArray = Object.values(venueData);
	const [showFilters, setShowFilters] = useState(false);

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setFilterCriteria({ ...filterCriteria, [name]: value });
	};

	const applyFilter = (venue) => {
		for (let key in filterCriteria) {
			if (filterCriteria[key] !== "") {
				const venueValue = venue[key]?.toString().toLowerCase(); // Convert to lowercase string
				const filterValue = filterCriteria[key].toLowerCase();
				if (
					key === "VenueName" ||
					key === "Location"
				) {
					if (!venueValue || venueValue.indexOf(filterValue) === -1) {
						return false;
					}
				} else if (key === "Review" || key === "GuestCapacity") {
					let v = +venueValue;
					let f = +filterValue;
					if (!venueValue || v < f) {
						return false;
					}
				}
			}
		}
		return true;
	};

	const handleSelectChange = (event) => {
		const { name, value } = event.target;
		const updatedFilterCriteria = { ...filterCriteria, [name]: value };

		// Set the color of the selected option to black
		event.target.style.color = "black";

		// Update the filter criteria
		setFilterCriteria(updatedFilterCriteria);
	};

	return (
		<div className="venue-container">
			<div className="background-image" style={{ backgroundImage: `url(${vendorsBBKG})` }}></div>
			{/* Filter section */}
			<div
				style={{
					height: "30px",
					display: "flex",
					justifyContent: "right",
				}}
			>
				<button
					onClick={() => setShowFilters(!showFilters)}
					style={{
						fontWeight: "600",
						backgroundColor: "cadetblue",
						width: "10vw",
						height: "30px",
					}}
				>
					Filters
				</button>
				{showFilters && (
					<div className="filter-section">
						<input
							type="text"
							name="VenueName"
							placeholder="Venue Name"
							value={filterCriteria.VenueName}
							onChange={handleFilterChange}
						/>
						<input
							type="text"
							name="Location"
							placeholder="Location"
							value={filterCriteria.Location}
							onChange={handleFilterChange}
						/>
						<input
							type="text"
							name="GuestCapacity"
							placeholder="Guest Capacity"
							value={filterCriteria.GuestCapacity}
							onChange={handleFilterChange}
						/>
						<input
							type="text"
							name="Review"
							placeholder="Review"
							value={filterCriteria.Review}
							onChange={handleFilterChange}
						/>
						<button
							onClick={() =>
								setFilterCriteria({
									VenueName: "",
									Location: "",
									GuestCapacity: "",
									StartingPrice: "",
									Review: "",
								})
							}
							style={{
								fontWeight: "600",
								backgroundColor: "darkseagreen",
							}}
						>
							Reset
						</button>
					</div>
				)}
			</div>
			<div className="blockss">
				{/* Venues */}
				<div
					className="list-item"
					style={{ backgroundImage: `url(${venue})` }}
				>
					<p className="category-title">Venues</p>
				</div>
				<div className="vendor-details">
					{venuesArray.length > 0 ? (
						venuesArray.filter(applyFilter).map((venue, index) => (
							<div key={index} className="vendor-item">
								<h3>{venue.VenueName}</h3>
								<p>Location: {venue.Location}</p>
								<p>Guest Capacity: {venue.GuestCapacity}</p>
								<p>Contact: {venue.Contact}</p>
								<p>
									Webpage:{" "}
									<a href={venue.Webpage}>{venue.Webpage}</a>
								</p>
								<p>Review: {venue.Review}</p>
							</div>
						))
					) : (
						<p>No venues available.</p>
					)}
				</div>
				<br />
			</div>
		</div>
	);
};

export default BdayVenues;
