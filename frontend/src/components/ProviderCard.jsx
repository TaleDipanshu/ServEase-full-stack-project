import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProviderCard = ({ provider }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-200 p-4">
      {provider.image && (
        <img className="w-full h-48 object-cover" src={provider.image} alt={provider.name} />
      )}
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
        <p className="text-gray-700 mb-2">{provider.service}</p>
        {provider.description && (
          <p className="text-gray-600 text-sm mb-4">{provider.description}</p>
        )}
        <Link 
          to={`/providers/${provider.id}`} 
          className="text-blue-600 font-semibold hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

// Define prop types
ProviderCard.propTypes = {
  provider: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    image: PropTypes.string,  
    description: PropTypes.string,  
  }).isRequired,
};

export default ProviderCard;
