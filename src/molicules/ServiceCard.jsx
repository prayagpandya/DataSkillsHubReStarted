import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  planName,
  description,
  buttonText = 'Get Started',
  backgroundImage,
  serviceLink = '#', // Default link, can be customized
}) => {
  return (
    <div className='relative flex flex-col rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white min-h-[450px]'>
      {/* 100% Job Guarantee Badge (Customizable for Services) */}
      <div
        className='absolute top-4 right-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full shadow-md animate-pulse z-20'
        aria-label='Premium Service Assurance'
      >
        Premium Service
      </div>

      {/* Service Image */}
      <div className='w-full h-80 overflow-hidden rounded-t-2xl'>
        <img
          src={backgroundImage}
          alt={planName}
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col flex-1 px-6 py-4'>
        {/* Title and Description Container with Fixed Growth */}
        <div className='flex flex-col flex-1 space-y-2'>
          {/* Service Title */}
          <h3 className='text-2xl font-semibold font-inter text-gray-900 tracking-tight'>
            {planName}
          </h3>

          {/* Description */}
          <p className='text-base font-poppins text-gray-600 leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Button - Aligned at the Bottom */}
        <div className='mt-6'>
          <Link
            aria-describedby={`service-${planName
              .toLowerCase()
              .replace(/ /g, '-')}`}
            className='inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase bg-gradient-to-r from-gray-800 to-gray-900 rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500'
            to={serviceLink} // Use serviceLink for navigation
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
