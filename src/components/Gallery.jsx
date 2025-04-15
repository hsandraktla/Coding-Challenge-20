import React from "react"; //Importing React
import TourCard from "./TourCard";  //Importing TourCard component

const Gallery = ({ tours, loading, error, selectedDestination, onRemove, onRefresh }) => { 
  //Filtering tours based on the selected destination
  const filteredTours =
    selectedDestination === "All Destinations"
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  if (loading) return <h2>Loading...</h2>; //Display loading message while data is being fetched
  if (error) return <h2>{error}</h2>; //Display error message if there is an error
  if (filteredTours.length === 0) //Display message if no tours are available
    return (
      <div>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );

  return (
    <section className="gallery">
      {filteredTours.map((tour) => ( //Map through the filtered tours and create a TourCard for each
        <TourCard key={tour.id} {...tour} onRemove={onRemove} /> //Pass the tour data and onRemove function to TourCard
      ))}
    </section>
  );
};

//Exporting the Gallery component
export default Gallery;