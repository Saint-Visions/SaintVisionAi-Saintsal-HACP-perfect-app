// Mark this file as a Client Component
'use client';  // Add this line at the top

import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '@/context';  // Make sure this matches the correct context location

const SaintVisionPage: React.FC = () => {
  const { state, setState } = useContext(MyContext);  // Accessing global context state
  
  const [data, setData] = useState<any>(null);  // Local state for dynamic data

  useEffect(() => {
    fetch('/api/saintvision')
      .then((response) => response.json())
      .then((data) => setData(data))  // Set dynamic data to state
      .catch((error) => console.error('Error fetching saintvision data:', error));
  }, []);  // Fetch data only once on component mount

  return (
    <div className="saintvision-page">
      <h1>Welcome to SaintVision™</h1>
      
      {/* Display dynamic data or loading */}
      <div>
        {data ? (
          <div>
            <h2>SaintVision Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Render fetched data */}
          </div>
        ) : (
          <p>Loading data...</p>  {/* Loading state */}
        )}
      </div>

      {/* Display context state (if needed) */}
      <div>
        <h2>Context Data:</h2>
        <p>{state ? JSON.stringify(state) : 'No context data available'}</p>
      </div>
    </div>
  );
};

export default SaintVisionPage;

