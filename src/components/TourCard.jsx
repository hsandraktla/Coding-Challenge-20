//Task 3: Render Tour Cards
import React, { useState } from 'react';

const TourCard = ({ tour, onRemove }) => {
    return (
        <div className="tour-card">
            <h2>{tour.name}</h2>
            <p>{tour.description}</p>
            <button onClick={() => onRemove(tour.id)}>Not Interested</button>
        </div>
    );
};

const TourGallery = ({ tours }) => {
    const [tourList, setTourList] = useState(tours);

    const handleRemove = (id) => {
        setTourList(tourList.filter((tour) => tour.id !== id));
    };

    return (
        <div className="tour-gallery">
            {tourList.map((tour) => (
                <TourCard key={tour.id} tour={tour} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default TourGallery;