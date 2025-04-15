import React from "react";

const DestinationSelector = ({ tours, selected, setSelected }) => {
  const destinations = ["All Destinations", ...new Set(tours.map((t) => t.name))];

  return (
    <div className="selector">
      <label htmlFor="destination">Choose a destination: </label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {destinations.map((dest, index) => (
          <option key={index} value={dest}>
            {dest}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;