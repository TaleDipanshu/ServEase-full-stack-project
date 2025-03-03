import React, { useState } from 'react';
import { FaHammer, FaTruckMoving, FaPaintRoller, FaSearch } from 'react-icons/fa';
import { MdCleaningServices, MdOutlineHomeRepairService } from 'react-icons/md';
import { GiGardeningShears } from 'react-icons/gi';
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlineTool } from 'react-icons/ai';
import ServiceCarousel from '../components/Carousel';
// Service data with description and image paths
const serviceData = {
  Assembly: {
    description: 'Get help assembling furniture or other complex items quickly and efficiently.',
    image: 'https://www.build-review.com/wp-content/uploads/2021/03/Plumbing.jpg',
  },
  Mounting: {
    description: 'Expert mounting services for TVs, shelves, and more, ensuring everything is securely fixed.',
    image: '/src/services/images/mounting.jpg',
  },
  Moving: {
    description: 'Reliable help with moving your belongings, from packing to transportation.',
    image: '/src/services/images/moving.jpg',
  },
  Cleaning: {
    description: 'Comprehensive cleaning services for homes, offices, and other spaces.',
    image: '/src/services/images/cleaning.jpg',
  },
  'Outdoor Help': {
    description: 'Get assistance with gardening, landscaping, and other outdoor tasks.',
    image: '/src/services/images/outdoor.jpg',
  },
  'Home Repairs': {
    description: 'Fix any issues around the house, from plumbing to electrical repairs.',
    image: '/src/services/images/home-repairs.jpg',
  },
  Painting: {
    description: 'Professional painting services to give your space a fresh, new look.',
    image: '/src/services/images/painting.jpg',
  },
  Trending: {
    description: 'Explore the latest trending services that are popular right now.',
    image: '/src/services/images/trending.jpg',
  },
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('Assembly');

  const handleSearch = () => {
    alert(`You searched for: ${searchTerm}`);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-20 pb-10 px-4">
        <h1 className="text-4xl lg:text-6xl  font-bold text-green-900 mb-8">
          Book trusted help for home tasks
        </h1>

        {/* Search Box */}
        <div className="w-full max-w-xl relative mb-8">
          <input
            type="text"
            placeholder="What do you need help with?"
            className="w-full py-3 px-6 rounded-full border-2 border-gray-300 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-700 text-white px-5 py-2 rounded-full"
            onClick={handleSearch}
          >
            <FaSearch size={20} />
          </button>
        </div>

        {/* Service Categories */}
        <div className="px-4 md:px-8 py-4 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto mb-10">
            {[
              { name: 'Assembly', icon: <AiOutlineTool size={30} className="mb-2 text-green-700" /> },
              { name: 'Mounting', icon: <FaHammer size={30} className="mb-2 text-green-700" /> },
              { name: 'Moving', icon: <FaTruckMoving size={30} className="mb-2 text-green-700" /> },
              { name: 'Cleaning', icon: <MdCleaningServices size={30} className="mb-2 text-green-700" /> },
              { name: 'Outdoor Help', icon: <GiGardeningShears size={30} className="mb-2 text-green-700" /> },
              { name: 'Home Repairs', icon: <MdOutlineHomeRepairService size={30} className="mb-2 text-green-700" /> },
              { name: 'Painting', icon: <FaPaintRoller size={30} className="mb-2 text-green-700" /> },
              { name: 'Trending', icon: <BiTrendingUp size={30} className="mb-2 text-green-700" /> },
            ].map((service) => (
              <button
                key={service.name}
                className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-green-100 transition-all"
                onClick={() => handleServiceClick(service.name)}
              >
                {service.icon}
                <span className="text-gray-700 text-sm md:text-base">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {['General Furniture Assembly', 'IKEA Assembly', 'Crib Assembly', 'PAX Assembly', 'Bookshelf Assembly'].map((service) => (
            <button
              key={service}
              className="w-full px-4 py-2 border-2 border-gray-800 rounded-full text-center font-bold text-gray-600 hover:bg-green-100 transition-all"
              onClick={() => handleServiceClick(service)}
            >
              {service}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto p-4 bg-red-200 mt-5 rounded-xl " >
          <div className="md:flex mb-2">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">{selectedService}</h2>
              <p>{serviceData[selectedService].description}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={serviceData[selectedService].image}
                alt={`${selectedService} image`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

      
     
      </section>
      <ServiceCarousel />
    
      <div className="relative  my-20 w-full h-[60vh] bg-[#FFFBEB] ">
      
      <div className="absolute inset-0 w-[84%] h-[88%] top-[2.5%] py-4 left-[10%]">
        <img
          src="https://www.build-review.com/wp-content/uploads/2021/03/Plumbing.jpg"
          alt="Background image of a kitchen"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Box */}
      <div className="absolute top-[5%] left-0 p-4 z-10 w-full  max-w-md">
        <div className="bg-white rounded-lg shadow-lg transform translate-x-[5%]">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How it works</h2>

           
            <div className="space-y-6">
              {[
                { number: 1, color: 'bg-blue-100', text: 'Choose a Tasker by price, skills, and reviews.' },
                { number: 2, color: 'bg-yellow-100', text: 'Schedule a Tasker as early as today.' },
                { number: 3, color: 'bg-green-100', text: 'Chat, pay, tip, and review all in one place.' },
              ].map((step) => (
                <div key={step.number} className="flex items-start">
                  <div
                    className={`${step.color} w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}
                  >
                    <span className="text-lg font-semibold">{step.number}</span>
                  </div>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
};

export default HomePage;
