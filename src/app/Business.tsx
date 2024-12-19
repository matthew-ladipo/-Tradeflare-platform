// components/BusinessList.tsx

"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for each business item
interface Business {
  id: string;
  name: string;
  description: string;
  image: string;
  image_alt: string;
}

const BusinessList: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API route when the component mounts
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        // Make API call to your Next.js API route
        const response = await axios.get('https://random-image-pepebigotes.vercel.app/api/random-image');
        setBusinesses(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Random Businesses</h1>
      <ul>
        {businesses.map((business) => (
          <li key={business.id} className="my-4">
            <h2>{business.name}</h2>
            <p>{business.description}</p>
            {/* <img src={business.image} alt={business.image_alt} width="200" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessList;
