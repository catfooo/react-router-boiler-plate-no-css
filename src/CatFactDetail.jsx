import React, { useState, useEffect } from 'react';

const CatFactDetail = ({ match }) => {
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    // Define the URL for the Cat Fact API with the factId from the route params
    const factId = match.params.factId;
    const apiUrl = `https://cat-fact.herokuapp.com/facts/${factId}`;

    // Fetch the cat fact data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data);
      })
      .catch((error) => {
        console.error('Error fetching cat fact:', error);
      });
  }, [match.params.factId]);

  return (
    <div>
      <h2>Cat Fact Detail</h2>
      {catFact ? (
        <div>
          <p>Fact ID: {catFact._id}</p>
          <p>Text: {catFact.text}</p>
          {/* You can display more details about the cat fact as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CatFactDetail;
