import React, { useState } from "react";
import { decoratorData } from "./DecoratorsB.mjs";

import { florist } from "../../utils/images";
import "./birthday.css";

const BdayDecorators = () => {
	const [filterCriteria, setFilterCriteria] = useState({
		BakerName: "",
		Location: "",
		Review: "",
	});

	const decoratorsArray = Object.values(decoratorData);
	const [showFilters, setShowFilters] = useState(false);

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setFilterCriteria({ ...filterCriteria, [name]: value });
	};

	const applyFilter = (decorator) => {
		for (let key in filterCriteria) {
			if (filterCriteria[key] !== "") {
				const decoratorValue = decorator[key]?.toString().toLowerCase(); // Convert to lowercase string
				const filterValue = filterCriteria[key].toLowerCase();
				if (key === "BakerName" || key === "Location") {
					if (
						!decoratorValue ||
						decoratorValue.indexOf(filterValue) === -1
					) {
						return false;
					}
				} else if (key === "Review") {
					let v = +decoratorValue;
					let f = +filterValue;
					if (!decoratorValue || v < f) {
						return false;
					}
				}
			}
		}
		return true;
	};

	return (
		<div className="wedding-container">
			{/* Filter section start*/}
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
							placeholder="Decorator Name"
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
			{/* Filter section end*/}
			<div className="blockss">
				<div
					className="list-item"
					style={{ backgroundImage: `url(${florist})` }}
				>
					<p className="category-title">Decorators</p>
				</div>
				<div className="vendor-details">
					{decoratorsArray.length > 0 ? (
						decoratorsArray
							.filter(applyFilter)
							.map((decorator, index) => (
								<div key={index} className="vendor-item">
									<h3>{decorator.BakerName}</h3>
									<p>Location: {decorator.Location}</p>
									<p>
										Starting Price:{" "}
										{decorator.StartingPrice}
									</p>
									<p>Contact: {decorator.Contact}</p>
									<p>
										Webpage:{" "}
										<a href={decorator.Webpage}>
											{decorator.Webpage}
										</a>
									</p>
									<p>Review: {decorator.Review}</p>
								</div>
							))
					) : (
						<p>No Decorators available.</p>
					)}
				</div>

				<br />
			</div>
		</div>
	);
};

export default BdayDecorators;
