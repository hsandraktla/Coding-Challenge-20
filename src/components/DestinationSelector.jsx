import React from "react"; //Importing React

const DestinationSelector = ({ tours, selected, setSelected }) => { 
  //Extracting all unique name values from the tours
  const destinations = ["All Destinations", ...new Set(tours.map((t) => t.name))]; //Including "All Destinations" option to reset the menu

  return ( 
    <div className="selector">
      <label htmlFor="destination">Choose a destination: </label>
      <select //Create a dropdown menu to choose a tour destination
        id="destination"
        value={selected}
        onChange={(e) => setSelected(e.target.value)} //Update the selected destination
      >
        {destinations.map((dest, index) => ( //Map through the destinations and create an option for each
          <option key={index} value={dest}>
            {dest} {/*Display the destination name*/}
          </option>
        ))}
      </select>
    </div>
  );
};

//Exporting the DestinationSelector component
export default DestinationSelector;