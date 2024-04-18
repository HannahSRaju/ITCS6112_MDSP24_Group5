import React, { useState } from "react";
import { catererData } from "./CaterersData.mjs";
import { caterer } from "../../utils/images";
import "./wedding.css";

const Caterers = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        catererName: "",
        location: "",
        startingPrice: "",
		review: ""
    });

    const caterersArray = Object.values(catererData);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const applyFilter = (caterer) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "" && caterer[key].toLowerCase().indexOf(filterCriteria[key].toLowerCase()) === -1) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className="wedding-container">
            <div className="blockss">
                {/* Caterers */}
                <div className="list-item" style={{ backgroundImage: `url(${caterer})` }}>
                    <p className="category-title">Caterers</p>
                </div>
                <div className="vendor-details">
                    {/* Filter section */}
                    <div className="filter-section">
                        <input type="text" name="catererName" placeholder="Caterer Name" value={filterCriteria.catererName} onChange={handleFilterChange} />
                        <input type="text" name="location" placeholder="Location" value={filterCriteria.location} onChange={handleFilterChange} />
                        <input type="text" name="startingPrice" placeholder="Starting Price" value={filterCriteria.startingPrice} onChange={handleFilterChange} />
						<input type="text" name="review" placeholder="Review" value={filterCriteria.review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            catererName: "",
                            location: "",
                            startingPrice: "",
							review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
                    {/* Caterer details based on filter */}
                    {caterersArray.length > 0 ? (
                        caterersArray.filter(applyFilter).map((caterer, index) => (
                            <div key={index} className="vendor-item">
                                <h3>{caterer.CatererName}</h3>
                                <p>Location: {caterer.Location}</p>
                                <p>Starting Price: {caterer.StartingPrice}</p>
                                <p>Contact: {caterer.Contact}</p>
                                <p>Webpage: <a href={caterer.Webpage}>{caterer.Webpage}</a></p>
                                <p>Review: {caterer.Review}</p>
                            </div>
                        ))
                    ) : (
                        <p>No caterers available.</p>
                    )}
                </div>
                <br />
            </div>
        </div>
    );
};

export default Caterers;
