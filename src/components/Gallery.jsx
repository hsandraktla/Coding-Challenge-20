import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, loading, error, selectedDestination, onRemove, onRefresh }) => {
  const filteredTours =
    selectedDestination === "All Destinations"
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (filteredTours.length === 0)
    return (
      <div>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );

  return (
    <section className="gallery">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;