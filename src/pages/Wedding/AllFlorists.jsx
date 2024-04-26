import React, { useState } from "react";
import { allFloristData } from "./FloristsData.mjs";
import { florist } from "../../utils/images";
import "./wedding.css";

const Florists = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        FloristName: "",
        Location: "",
        StartingPrice: "",
		Review: ""
    });

    const floristsArray = Object.values(allFloristData);
	const [showFilters, setShowFilters] = useState(false);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const applyFilter = (florist) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "") {
			const floristValue = florist[key]?.toString().toLowerCase(); // Convert to lowercase string
				const filterValue = filterCriteria[key].toLowerCase();
				if (key == 'FloristName' || key == 'Location') {
					if (!floristValue || floristValue.indexOf(filterValue) === -1) {
						return false;
					}
				} else if (key == 'Review') {
					let v = +floristValue;
					let f = +filterValue;
					if (!floristValue || v < f) {
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
                        <input type="text" name="FloristName" placeholder="Florist Name" value={filterCriteria.FloristName} onChange={handleFilterChange} />
                        <input type="text" name="Location" placeholder="Location" value={filterCriteria.Location} onChange={handleFilterChange} />
						<input type="text" name="Review" placeholder="Review" value={filterCriteria.Review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            FloristName: "",
                            Location: "",
                            StartingPricetartingPrice: "",
							Review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
					)}
					</div>
                    {/* Filter section end*/}
            <div className="blockss">
                {/* Florists */}
                <div className="list-item" style={{ backgroundImage: `url(${florist})` }}>
                    <p className="category-title">Florists</p>
                </div>
                <div className="vendor-details">
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
