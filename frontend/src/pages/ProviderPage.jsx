import React from 'react';
import ProviderCard from '../components/ProviderCard';
import ServiceCard from '../components/ServiceCard';

const ProvidersPage = () => {
  // Define an array of providers
  const providers = [
    {
      id: 'provider1',
      name: 'John Doe',
      service: 'Plumbing',
      image: 'https://th.bing.com/th/id/R.46bb11a00838f4db62d3ad15d0ba0e69?rik=BOBQAayP2nsBbQ&riu=http%3a%2f%2fbetterhousekeeper.com%2fwp-content%2fuploads%2f2019%2f09%2ffixing-plumbing-system.jpg&ehk=pXQWSFbz0sYAM7oZIkQlzYR5YEeNUnI9yOgCFGwMxB8%3d&risl=&pid=ImgRaw&r=0',
      description: 'Expert plumbing services with over 10 years of experience.',
    },
    {
      id: 'provider2',
      name: 'Jane Smith',
      service: 'Electrical',
      image: 'https://th.bing.com/th/id/OIP.qIrjCdc8mRqiBiNa9IW9DQHaE8?rs=1&pid=ImgDetMain',
      description: 'Professional electrical services for homes and businesses.',
    },
    {
      id: 'provider3',
      name: 'Bob Johnson',
      service: 'Gardening',
      image: 'https://i.ytimg.com/vi/i2luQk0IYAg/maxresdefault.jpg',
      description: 'Experienced gardener with a passion for landscape design.',
    },
    // Add more providers as needed
  ];
  return (
    <div className="w-full">
      <div className=" mb-4">
        <ServiceCard 
          images={[
            'https://www.build-review.com/wp-content/uploads/2021/03/Plumbing.jpg',
            'https://i.ytimg.com/vi/i2luQk0IYAg/maxresdefault.jpg',
            'https://th.bing.com/th/id/OIP.qIrjCdc8mRqiBiNa9IW9DQHaE8?rs=1&pid=ImgDetMain'
          ]}
          heading="Service Title"
          description="Service Description"
        />
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Service Providers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvidersPage;
