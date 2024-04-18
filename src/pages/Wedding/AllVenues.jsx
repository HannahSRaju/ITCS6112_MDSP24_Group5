import React, { useState } from "react";
import { venueData } from "./VenuesData.mjs";
import { venue } from "../../utils/images";
import "./wedding.css";

const Venues = () => {
    const [filterCriteria, setFilterCriteria] = useState({
        venueName: "",
        location: "",
        guestCapacity: "",
        serviceType: "",
        startingPrice: "",
		review: ""
    });

    const venuesArray = Object.values(venueData);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const applyFilter = (venue) => {
        for (let key in filterCriteria) {
            if (filterCriteria[key] !== "" && venue[key].toLowerCase().indexOf(filterCriteria[key].toLowerCase()) === -1) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className="wedding-container">
            <div className="blockss">
                {/* Venues */}
                <div className="list-item" style={{ backgroundImage: `url(${venue})` }}>
                    <p className="category-title">Venues</p>
                </div>
                <div className="vendor-details">
                    {/* Filter section */}
                    <div className="filter-section">
                        <input type="text" name="venueName" placeholder="Venue Name" value={filterCriteria.venueName} onChange={handleFilterChange} />
                        <input type="text" name="location" placeholder="Location" value={filterCriteria.location} onChange={handleFilterChange} />
                        <input type="text" name="guestCapacity" placeholder="Guest Capacity" value={filterCriteria.guestCapacity} onChange={handleFilterChange} />
                        <input type="text" name="serviceType" placeholder="Service Type" value={filterCriteria.serviceType} onChange={handleFilterChange} />
						<input type="text" name="startingPrice" placeholder="Starting Price" value={filterCriteria.startingPrice} onChange={handleFilterChange} />
						<input type="text" name="review" placeholder="Review" value={filterCriteria.review} onChange={handleFilterChange} />
                        {/* Add more inputs for other fields */}
                        <button onClick={() => setFilterCriteria({
                            venueName: "",
                            location: "",
                            guestCapacity: "",
                            serviceType: "",
							startingPrice: "",
							review: ""
                            // Reset other fields here
                        })}>Reset</button>
                    </div>
                    {/* Venue details based on filter */}
                    {venuesArray.length > 0 ? (
                        venuesArray.filter(applyFilter).map((venue, index) => (
                            <div key={index} className="vendor-item">
                                <h3>{venue.VenueName}</h3>
                                <p>Location: {venue.Location}</p>
                                <p>Guest Capacity: {venue.GuestCapacity}</p>
                                <p>Service Type: {venue.ServiceType}</p>
                                <p>Starting Price: {venue.StartingPrice}</p>
                                <p>Contact: {venue.Contact}</p>
                                <p>Webpage: <a href={venue.Webpage}>{venue.Webpage}</a></p>
                                <p>Review: {venue.Review}</p>
                            </div>
                        ))
                    ) : (
                        <p>No venues available.</p>
                    )}
                </div>
                <br />
            </div>
        </div>
    );
};

export default Venues;
