import React, { useState, useEffect } from "react"; //Importing React and hooks
import Gallery from "./components/Gallery.jsx"; //Importing Gallery component
import DestinationSelector from "./components/DestinationSelector.jsx"; //Importing DestinationSelector component
import "./styles/styles.css"; //Importing the CSS styles

function App() { 
  const [tours, setTours] = useState([]); //Use useState to store tours
  const [loading, setLoading] = useState(true); //State to manage loading
  const [error, setError] = useState(null); //State to manage error
  const [selectedDestination, setSelectedDestination] = useState("All Destinations"); //State to manage selected destinations

  const fetchTours = async () => { //Function to fetch tours from API
    setLoading(true);
    try {
      const response = await fetch("https://www.course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => { //Use useEffect to fetch tours on component mount
    fetchTours();
  }, []);

  const handleRemoveTour = (id) => { //Function to remove a tour
    const updatedTours = tours.filter((tour) => tour.id !== id); //Filter out the removed tour
    setTours(updatedTours);
  };

  if (loading) { //Check if loading
    return <div>Loading...</div>;
  }

  if (error) { //Check if there is an error
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <h1 className="title">Tour Destination Selector</h1> {/*Main title of the app*/}
      <DestinationSelector {/*Pass the tours, selected destination, and functions to DestinationSelector*/}
        tours={tours} 
        selected={selectedDestination}
        setSelected={setSelectedDestination}
      />
      <Gallery {/*Pass the tours, loading state, error message, selected destination, and functions to Gallery*/}
        tours={tours}
        loading={loading}
        error={error}
        selectedDestination={selectedDestination}
        onRemove={handleRemoveTour}
        onRefresh={fetchTours}
      />
    </main>
  );
};

//Exporting the App component
export default App;
