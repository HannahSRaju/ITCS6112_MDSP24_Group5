import React, { useState } from "react";
import { bakerData } from "./BakersB.mjs";

import { baker, vendorsBBKG } from "../../utils/images";
import "./birthday.css";

const BdayBakers = () => {
	const [filterCriteria, setFilterCriteria] = useState({
		BakerName: "",
		Location: "",
		Review: "",
	});

	const bakersArray = Object.values(bakerData);
	const [showFilters, setShowFilters] = useState(false);

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setFilterCriteria({ ...filterCriteria, [name]: value });
	};

	const applyFilter = (baker) => {
		for (let key in filterCriteria) {
			if (filterCriteria[key] !== "") {
				const bakerValue = baker[key]?.toString().toLowerCase(); // Convert to lowercase string
				const filterValue = filterCriteria[key].toLowerCase();
				if (key === "BakerName" || key === "Location") {
					if (!bakerValue || bakerValue.indexOf(filterValue) === -1) {
						return false;
					}
				} else if (key === "Review") {
					let v = +bakerValue;
					let f = +filterValue;
					if (!bakerValue || v < f) {
						return false;
					}
				}
			}
		}
		return true;
	};

	return (
		<div className="baker-container">
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
							name="BakerName"
							placeholder="Baker Name"
							value={filterCriteria.BakerName}
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
							name="Review"
							placeholder="Review"
							value={filterCriteria.Review}
							onChange={handleFilterChange}
						/>
						<button
							onClick={() =>
								setFilterCriteria({
									BakerName: "",
									Location: "",
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
				{/* Bakers */}
				<div
					className="list-item"
					style={{ backgroundImage: `url(${baker})` }}
				>
					<p className="category-title">Bakers</p>
				</div>
				<div className="vendor-details">
					{bakersArray.length > 0 ? (
						bakersArray.filter(applyFilter).map((baker, index) => (
							<div key={index} className="vendor-item">
								<h3>{baker.BakerName}</h3>
								<p>Location: {baker.Location}</p>
								<p>Starting Price: {baker.StartingPrice}</p>
								<p>Contact: {baker.Contact}</p>
								<p>
									Webpage:{" "}
									<a href={baker.Webpage}>{baker.Webpage}</a>
								</p>
								<p>Review: {baker.Review}</p>
							</div>
						))
					) : (
						<p>No Bakers available.</p>
					)}
				</div>
				<br />
			</div>
		</div>
	);
};

export default BdayBakers;
