import React, { useState } from 'react';

const JobCard = ({ job }) => {
  const {
    title = 'Unknown Job',
    company = 'Unknown Company',
    date = 'N/A',
    location = 'Unknown Location',
    experience = 'N/A',
    vacancies = 'N/A',
    applied = 'N/A',
    logo = 'https://via.placeholder.com/40x40', // Default fallback
  } = job || {};

  const [imageSrc, setImageSrc] = useState(logo); // Manage image source with state
  const fallbackImage = 'https://via.placeholder.com/40x40'; // Define fallback explicitly

  const handleImageError = (e) => {
    if (e.target.src !== fallbackImage) {
      setImageSrc(fallbackImage);
    }
  };

  return (
    <div className='job-card bg-white p-6 rounded-xl shadow-md w-full mx-4 my-4 hover:shadow-xl transition-all duration-300'>
      <div className='flex items-center mb-4'>
        <img
          src={imageSrc}
          alt={`${company} logo`}
          className='w-12 h-12 rounded-full mr-3 object-cover'
          onError={handleImageError}
        />
        <div>
          <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
          <p className='text-gray-500 text-sm'>
            {company} | Posted: {date}
          </p>
        </div>
      </div>

      <div className='space-y-2 text-sm'>
        <p className='text-green-600 flex items-center'>
          <span className='mr-1'>📍</span> {location}
        </p>
        <p className='text-gray-600'>Experience: {experience}</p>
        <p className='text-gray-600'>Vacancies: {vacancies}</p>
        <p className='text-gray-600'>Applied: {applied}</p>
      </div>

      <div className='flex justify-between items-center mt-6'>
        <button className='px-4 py-2 bg-zinc-200 text-zinc-800 font-semibold rounded-md hover:bg-zinc-300 transition-colors duration-200'>
          Apply Now
        </button>
        <button className='px-4 py-2 border border-zinc-200 text-zinc-800 bg-transparent rounded-md hover:bg-zinc-100 transition-colors duration-200'>
          More Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
