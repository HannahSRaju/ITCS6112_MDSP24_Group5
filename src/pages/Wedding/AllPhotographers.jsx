import React, { useState } from "react";
import { allPhotographerData } from "./PhotographersData.mjs";
import { photographer } from "../../utils/images";
import "./wedding.css";

const Photographers = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        photographerName: "",
        location: "",
        style: "",
		startingPrice: "",
		review: ""
    });

    const photographersArray = Object.values(allPhotographerData);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const applyFilter = (photographer) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "" && photographer[key].toLowerCase().indexOf(filterCriteria[key].toLowerCase()) === -1) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className="wedding-container">
            <div className="blockss">
                {/* Photographers */}
                <div className="list-item" style={{ backgroundImage: `url(${photographer})` }}>
                    <p className="category-title">Photographers</p>
                </div>
                <div className="vendor-details">
                    {/* Filter section */}
                    <div className="filter-section">
                        <input type="text" name="photographerName" placeholder="Photographer Name" value={filterCriteria.photographerName} onChange={handleFilterChange} />
                        <input type="text" name="location" placeholder="Location" value={filterCriteria.location} onChange={handleFilterChange} />
                        <input type="text" name="style" placeholder="Style" value={filterCriteria.style} onChange={handleFilterChange} />
						<input type="text" name="startingPrice" placeholder="Starting Price" value={filterCriteria.startingPrice} onChange={handleFilterChange} />
						<input type="text" name="review" placeholder="Review" value={filterCriteria.review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            photographerName: "",
                            location: "",
                            style: "",
							startingPrice: "",
							review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
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
