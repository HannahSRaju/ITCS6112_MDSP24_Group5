import React, { useState } from "react";
import { allPlannerData } from "./PlannersData.mjs";
import { planner } from "../../utils/images";
import "./wedding.css";

const Planners = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        plannerName: "",
        location: "",
        numServices: "",
		startingPrice: "",
		review: ""
    });

    const plannersArray = Object.values(allPlannerData);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const applyFilter = (planner) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "" && planner[key].toLowerCase().indexOf(filterCriteria[key].toLowerCase()) === -1) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className="wedding-container">
            <div className="blockss">
                {/* Planners */}
                <div className="list-item" style={{ backgroundImage: `url(${planner})` }}>
                    <p className="category-title">Planners</p>
                </div>
                <div className="vendor-details">
                    {/* Filter section */}
                    <div className="filter-section">
                        <input type="text" name="plannerName" placeholder="Planner Name" value={filterCriteria.plannerName} onChange={handleFilterChange} />
                        <input type="text" name="location" placeholder="Location" value={filterCriteria.location} onChange={handleFilterChange} />
                        <input type="text" name="numServices" placeholder="Number of Services" value={filterCriteria.numServices} onChange={handleFilterChange} />
						<input type="text" name="startingPrice" placeholder="Starting Price" value={filterCriteria.startingPrice} onChange={handleFilterChange} />
						<input type="text" name="review" placeholder="Review" value={filterCriteria.review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            plannerName: "",
                            location: "",
                            numServices: "",
							startingPrice: "",
							review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
                    {/* Planner details based on filter */}
                    {plannersArray.length > 0 ? (
                        plannersArray.filter(applyFilter).map((planner, index) => (
                            <div key={index} className="vendor-item">
                                <h3>{planner.PlannerName}</h3>
                                <p>Location: {planner.Location}</p>
                                <p>Number of Services: {planner.NumServices}</p>
                                <p>Starting Price: {planner.StartingPrice}</p>
                                <p>Contact: {planner.Contact}</p>
                                <p>Webpage: <a href={planner.Webpage}>{planner.Webpage}</a></p>
                                <p>Review: {planner.Review}</p>
                            </div>
                        ))
                    ) : (
                        <p>No planners available.</p>
                    )}
                </div>
                <br />
            </div>
        </div>
    );
};

export default Planners;
