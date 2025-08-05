// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState(null); // Holds the dog image URL
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch dog image on component mount
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message); // data.message contains the image URL
        setIsLoading(false);       // Turn off loading state
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array = run only once when mounted

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={imageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
