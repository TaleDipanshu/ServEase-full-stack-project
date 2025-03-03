import React, { useState, useRef } from "react";


const services = [
  {
    title: "Painter",
    description: "Get your house painted by a professional painter.",
    imageUrl: "https://th.bing.com/th/id/OIP.TsqUtxlJlePInW_pKd8IhgHaFY?rs=1&pid=ImgDetMain",
  },
  {
    title: "Gardener",
    description: "Hire a skilled gardener for your lawn and garden.",
    imageUrl: "https://th.bing.com/th/id/OIP.Gsr-uvLvqhBbn9dE43Q0KgHaE7?rs=1&pid=ImgDetMain",
  },
    {
        title: "Doctor",
        description: "Consult a doctor for your health issues.",
        imageUrl: "https://th.bing.com/th/id/OIP.LczXdrMkR1M0DA0Q6diejQHaIH?rs=1&pid=ImgDetMain"
    },
  {
    title: "Plumber",
    description: "Fix your plumbing issues with an expert plumber.",
    imageUrl: "https://plumbingandbathroomspecialists.com.au/wp-content/uploads/2022/02/friendly_plumber_at_your_service-scaled.jpg",
  },
  {
    title: "Mechanic",
    description: "Get your vehicle repaired by a certified mechanic.",
    imageUrl: "https://th.bing.com/th/id/OIP.bE_59U6B5H0gYTcDj6pIBwHaE8?rs=1&pid=ImgDetMain",
  },
];

function ScrollBar() {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-5">
        Book a Service Appointment
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Find experienced professionals across all services
      </p>

      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slider Wrapper */}
        <div
          className={`flex w-[80%] ${
            isPaused ? "animate-none" : "animate-scroll"
          }`}
          ref={sliderRef}
        >
          {/* Duplicated Array for Infinite Effect */}
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/3 p-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="rounded-lg mb-4 mx-auto w-[50rem] h-[12rem]"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollBar;
