import React, { useState } from "react";
import { allPlannerData } from "./PlannersData.mjs";
import { planner } from "../../utils/images";
import "./wedding.css";

const Planners = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        PlannerName: "",
        Location: "",
        NumServices: "",
		StartingPrice: "",
		Review: ""
    });

    const plannersArray = Object.values(allPlannerData);
    const [showFilters, setShowFilters] = useState(false);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

	const applyFilter = (planner) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "") {
			const plannerValue = planner[key]?.toString().toLowerCase(); // Convert to lowercase string
				const filterValue = filterCriteria[key].toLowerCase();
				if (key == 'PlannerName' || key == 'Location') {
					if (!plannerValue || plannerValue.indexOf(filterValue) === -1) {
						return false;
					}
				} else if (key == 'Review') {
					let v = +plannerValue;
					let f = +filterValue;
					if (!plannerValue || v < f) {
						return false;
					}
				}
		}
        }
        return true;
    };

    return (
        <div className="wedding-container">
			 {/* Filter section */}
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
                        <input type="text" name="PlannerName" placeholder="Planner Name" value={filterCriteria.PlannerName} onChange={handleFilterChange} />
                        <input type="text" name="Location" placeholder="Location" value={filterCriteria.Location} onChange={handleFilterChange} />
						<input type="text" name="Review" placeholder="Review" value={filterCriteria.Review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            PlannerName: "",
                            Location: "",
                            NumServices: "",
							StartingPrice: "",
							Review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
					)}
					</div>
            <div className="blockss">
                {/* Planners */}
                <div className="list-item" style={{ backgroundImage: `url(${planner})` }}>
                    <p className="category-title">Planners</p>
                </div>
                <div className="vendor-details">
                   
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
