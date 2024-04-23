import React, { useState } from "react";
import { allCatererData } from "./CaterersData.mjs";
import { caterer } from "../../utils/images";
import "./wedding.css";

const Caterers = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        CatererName: "",
        Location: "",
		Review: ""
    });

    const caterersArray = Object.values(allCatererData);
	const [showFilters, setShowFilters] = useState(false);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const applyFilter = (caterer) => {
        for (let key in filterCriteria) {
			if (filterCriteria[key] !== "") {
			const catererValue = caterer[key]?.toString().toLowerCase(); // Convert to lowercase string
				const filterValue = filterCriteria[key].toLowerCase();
				if (key == 'CatererName' || key == 'Location') {
            if (filterCriteria[key] !== "" && catererValue.indexOf(filterValue) === -1) {
                return false;
            }
		} else if (key == 'Review') {
				let v = +catererValue;
				let f = +filterValue;
				if (!catererValue || v < f) {
					return false;
				}
			}
        }
	}
        return true;
    };

    return (
        <div className="wedding-container">
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
                        <input type="text" name="CatererName" placeholder="Caterer Name" value={filterCriteria.CatererName} onChange={handleFilterChange} />
                        <input type="text" name="Location" placeholder="Location" value={filterCriteria.Location} onChange={handleFilterChange} />
						<input type="text" name="Review" placeholder="Review" value={filterCriteria.Review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            CatererName: "",
                            Location: "",
							Review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
					)}
					</div>
            <div className="blockss">
                {/* Caterers */}
                <div className="list-item" style={{ backgroundImage: `url(${caterer})` }}>
                    <p className="category-title">Caterers</p>
                </div>
                <div className="vendor-details">
                    {/* Filter section */}
                   
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
