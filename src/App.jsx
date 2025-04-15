//Task 1: Fetch & Store Tour Data
import React, { useState, useEffect } from "react"; //Importing React and hooks

function App() { 
  const [tours, setTours] = useState([]); //Use useState to store tours
  const [loading, setLoading] = useState(true); //State to manage loading
  const [error, setError] = useState(null); //State to manage error

  useEffect(() => { //Effect to fetch data on component mount
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://course-api.com/react-tours-project"); //Fetch data from API
        if (!response.ok) {
          throw new Error("Failed to fetch tours"); //Check if response is ok
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

    fetchTours(); //Call the fetch function
  }, []);

  if (loading) { //Check if loading
    return <div>Loading...</div>;
  }

  if (error) { //Check if there is an error
    return <div>Error: {error}</div>;
  }

  return ( 
    <div>
      <h1>Available Tours</h1> 
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>{tour.name}</li>
        ))}
      </ul>
    </div>
  );
}

//Exporting the App component
export default App;
