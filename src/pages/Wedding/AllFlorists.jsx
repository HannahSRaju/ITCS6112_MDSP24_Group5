import React, { useState } from "react";
import { allFloristData } from "./FloristsData.mjs";
import { florist } from "../../utils/images";
import "./wedding.css";

const Florists = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        floristName: "",
        location: "",
        startingPrice: "",
		review: ""
    });

    const floristsArray = Object.values(allFloristData);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const applyFilter = (florist) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "" && florist[key].toLowerCase().indexOf(filterCriteria[key].toLowerCase()) === -1) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className="wedding-container">
            <div className="blockss">
                {/* Florists */}
                <div className="list-item" style={{ backgroundImage: `url(${florist})` }}>
                    <p className="category-title">Florists</p>
                </div>
                <div className="vendor-details">
                    {/* Filter section */}
                    <div className="filter-section">
                        <input type="text" name="floristName" placeholder="Florist Name" value={filterCriteria.floristName} onChange={handleFilterChange} />
                        <input type="text" name="location" placeholder="Location" value={filterCriteria.location} onChange={handleFilterChange} />
                        <input type="text" name="startingPrice" placeholder="Starting Price" value={filterCriteria.startingPrice} onChange={handleFilterChange} />
						<input type="text" name="review" placeholder="Review" value={filterCriteria.review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            floristName: "",
                            location: "",
                            startingPrice: "",
							review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
                    {/* Florist details based on filter */}
                    {floristsArray.length > 0 ? (
                        floristsArray.filter(applyFilter).map((florist, index) => (
                            <div key={index} className="vendor-item">
                                <h3>{florist.FloristName}</h3>
                                <p>Location: {florist.Location}</p>
                                <p>Starting Price: {florist.StartingPrice}</p>
                                <p>Contact: {florist.Contact}</p>
                                <p>Webpage: <a href={florist.Webpage}>{florist.Webpage}</a></p>
                                <p>Review: {florist.Review}</p>
                            </div>
                        ))
                    ) : (
                        <p>No florists available.</p>
                    )}
                </div>
                <br />
            </div>
        </div>
    );
};

export default Florists;
