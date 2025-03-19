import { Clock, LaptopMinimalCheck, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../organisms/Modal'; // Adjust the import path as needed

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const {
    title = 'Unknown Job',
    company = 'Unknown Company',
    date = 'N/A',
    location = 'Unknown Location',
    experience = 'N/A',
    jobType = 'N/A',
    logo = 'https://via.placeholder.com/40x40', // Default fallback
    id, // Ensure the job ID is available for navigation
  } = job || {};

  const [imageSrc, setImageSrc] = useState(logo); // Manage image source with state
  const fallbackImage = 'https://via.placeholder.com/40x40'; // Define fallback explicitly

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('');

  const handleImageError = (e) => {
    if (e.target.src !== fallbackImage) {
      setImageSrc(fallbackImage);
    }
  };

  const openModal = (source) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSource('');
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
        <p className='flex items-center'>
          <span className='mr-1 scale-75'>
            <MapPin />
          </span>{' '}
          {location}
        </p>
        <p className='text-gray-600 flex items-center'>
          <span className='scale-75'>
            <Clock />
          </span>
          Experience: {experience}
        </p>
        <p className='text-gray-600 flex items-center'>
          <span className='scale-75'>
            <LaptopMinimalCheck className='text-lg' />
          </span>
          JobType: {jobType}
        </p>
      </div>

      <div className='flex justify-between items-center mt-6'>
        <button
          onClick={() => openModal('Applying for Job')}
          className='px-4 py-2 bg-zinc-900 text-zinc-200 font-semibold rounded-md hover:bg-zinc-700 transition-colors duration-200'
          aria-label={`Quick apply for ${title} at ${company}`}
        >
          Quick Apply
        </button>
        <button
          onClick={() => navigate(`/jobs/${id}`)}
          className='px-4 py-2 border border-zinc-200 text-zinc-800 bg-transparent rounded-md hover:bg-zinc-100 transition-colors duration-200'
          aria-label={`View more details for ${title} at ${company}`}
        >
          More Details
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        source={modalSource}
        context={`${title} at ${company}`} // Pass the job title and company as context
        isJobPage={true} // Enable job-specific fields (Resume, Cover Letter)
      />
    </div>
  );
};

export default JobCard;
