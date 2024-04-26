import React, { useState } from "react";
import { allPhotographerData } from "./PhotographersData.mjs";
import { photographer } from "../../utils/images";
import "./wedding.css";

const Photographers = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        PhotographerName: "",
        Location: "",
        Style: "",
		StartingPrice: "",
		Review: ""
    });

    const photographersArray = Object.values(allPhotographerData);
	const [showFilters, setShowFilters] = useState(false);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

	const applyFilter = (photographer) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "") {
			const photographerValue = photographer[key]?.toString().toLowerCase(); // Convert to lowercase string
				const filterValue = filterCriteria[key].toLowerCase();
				if (key == 'PhotographerName' || key == 'Location') {
					if (filterCriteria[key] !== "" && photographerValue.indexOf(filterValue) === -1) {
						return false;
					}
				} else if (key == 'Review') {
					let v = +photographerValue;
					let f = +filterValue;
					if (!photographerValue || v < f) {
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
				<div style={{
				height: '30px',
				display: 'flex',
				justifyContent: 'right'
			}}>
				<button onClick={() => setShowFilters(!showFilters)} style={{
					fontWeight: '600',
					backgroundColor: 'cadetblue',
					width: '10vw',
					height: '30px'
				}}>
					Filters
				</button>
				{showFilters && (
			 <div className="filter-section">
                        <input type="text" name="PhotographerName" placeholder="Photographer Name" value={filterCriteria.PhotographerName} onChange={handleFilterChange} />
                        <input type="text" name="Location" placeholder="Location" value={filterCriteria.Location} onChange={handleFilterChange} />
						<input type="text" name="Review" placeholder="Review" value={filterCriteria.Review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            PhotographerName: "",
                            Location: "",
                            Style: "",
							StartingPrice: "",
							Review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
					)}
					</div>
                    {/* Filter section end*/}
            <div className="blockss">
                {/* Photographers */}
                <div className="list-item" style={{ backgroundImage: `url(${photographer})` }}>
                    <p className="category-title">Photographers</p>
                </div>
                <div className="vendor-details">
                    {/* Photographer details based on filter */}
                    {photographersArray.length > 0 ? (
                        photographersArray.filter(applyFilter).map((photographer, index) => (
                            <div key={index} className="vendor-item">
                                <h3>{photographer.Photographer}</h3>
                                <p>Location: {photographer.Location}</p>
                                <p>Style: {photographer.Style}</p>
                                <p>Starting Price: {photographer.StartingPrice}</p>
                                <p>Contact: {photographer.Contact}</p>
                                <p>Webpage: <a href={photographer.Webpage}>{photographer.Webpage}</a></p>
                                <p>Review: {photographer.Review}</p>
                            </div>
                        ))
                    ) : (
                        <p>No photographers available.</p>
                    )}
                </div>
                <br />
            </div>
        </div>
    );
};

export default Photographers;
