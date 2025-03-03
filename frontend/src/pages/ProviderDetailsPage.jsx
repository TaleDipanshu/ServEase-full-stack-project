import React from 'react';
import { useParams } from 'react-router-dom';

const ProviderDetailsPage = () => {
  const { id } = useParams();

  // Fetch provider details based on the ID
  // This is just an example, you'd normally fetch this from an API or Redux state
  const provider = {
    id,
    name: 'John Doe',
    service: 'Dentist',
    description: 'Experienced dentist with over 10 years in practice.',
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{provider.name}</h2>
      <p className="text-gray-700 mb-4">{provider.service}</p>
      <p>{provider.description}</p>
    </div>
  );
};

export default ProviderDetailsPage;
