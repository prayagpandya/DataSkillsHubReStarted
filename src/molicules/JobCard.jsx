/* eslint-disable no-unused-vars */
// JobCard.jsx
import { Clock, LaptopMinimalCheck, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../organisms/Modal';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const {
    title = 'Unknown Job',
    company = 'Unknown Company',
    date = 'N/A',
    location = 'Unknown Location',
    experience = 'N/A',
    jobType = 'N/A',
    salary = 'N/A',
    logo = 'https://via.placeholder.com/40x40',
    id,
  } = job || {};

  const [imageSrc, setImageSrc] = useState(logo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('');

  const handleImageError = (e) => {
    setImageSrc('https://via.placeholder.com/40x40');
  };

  const openModal = (source) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSource('');
  };

  const handleDetailsClick = () => {
    if (!id) {
      console.error('Job ID is undefined. Cannot navigate.');
      return;
    }
    navigate(`/jobs/${id}`);
  };

  return (
    <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col'>
      <div className='flex items-center mb-4'>
        <img
          src={imageSrc}
          alt={`${company} logo`}
          className='w-12 h-12 rounded-full mr-3 object-cover border border-gray-200'
          onError={handleImageError}
        />
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-gray-800 line-clamp-1'>
            {title}
          </h3>
          <p className='text-gray-500 text-sm'>
            {company} • {date}
          </p>
        </div>
      </div>

      <div className='space-y-2 text-sm text-gray-600 flex-1'>
        <p className='flex items-center gap-2'>
          <MapPin className='w-4 h-4' /> {location}
        </p>
        <p className='flex items-center gap-2'>
          <Clock className='w-4 h-4' /> {experience}
        </p>
        <p className='flex items-center gap-2'>
          <LaptopMinimalCheck className='w-4 h-4' /> {jobType}
        </p>
        <p className='text-gray-700 font-medium'>{salary}</p>
      </div>

      <div className='mt-6 flex gap-3'>
        <button
          onClick={() => openModal('Applying for Job')}
          className='flex-1 px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-colors duration-200 text-sm font-medium'
        >
          Quick Apply
        </button>
        <button
          onClick={handleDetailsClick}
          className='flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm font-medium'
        >
          Details
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        source={modalSource}
        context={`${title} at ${company}`}
        isJobPage={true}
      />
    </div>
  );
};

export default JobCard;
