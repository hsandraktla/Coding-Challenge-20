//Task 2: Create Dropdown Filter
import React, { useState } from 'react';

const DestinationSelector = ({ tours, onFilterChange }) => {
    // Extract unique destination names
    const destinations = ['All Destinations', ...new Set(tours.map(tour => tour.name))];

    const [selectedDestination, setSelectedDestination] = useState('All Destinations');

    const handleChange = (event) => {
        const selected = event.target.value;
        setSelectedDestination(selected);
        onFilterChange(selected === 'All Destinations' ? null : selected);
    };

    return (
        <div>
            <label htmlFor="destination-select">Choose a destination: </label>
            <select
                id="destination-select"
                value={selectedDestination}
                onChange={handleChange}
            >
                {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;