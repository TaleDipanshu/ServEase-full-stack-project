import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCard = ({ images, heading, description }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full relative">
      {images && images.length > 0 && (
        <div className="w-full">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="w-full">
                <img className="w-full h-[400px] object-cover" src={img} alt={`${heading}-${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

// Define prop types
ServiceCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
