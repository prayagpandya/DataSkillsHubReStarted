import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Heading from '../atoms/TypoGraphy/Heading';
// import { assets } from '../utils/assets';
import Modal from './Modal';

const CourseDetailedHero = ({
  title,
  subtitle,
  imageUrl,
  duration = '3 Months',
  language = 'English',
  jobAssistance = 'Job Assistance',
  deliveryMode = 'Live',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('');

  const openModal = (source) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSource('');
  };

  return (
    <section className='py-10'>
      {/* Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8'>
        {/* Left Side: Text and Buttons */}
        <div className='flex-1'>
          <nav className='text-sm text-zinc-600 mb-4'>
            <Link
              to='/'
              className='hover:text-zinc-900 transition-colors duration-200'
            >
              Home
            </Link>{' '}
            &gt;{' '}
            <Link
              to='/courses'
              className='hover:text-zinc-900 transition-colors duration-200'
            >
              Courses
            </Link>
            &gt; <span className='text-zinc-900'>{title}</span>
          </nav>

          {/* 100% Job Guarantee Badge */}
          <div
            className='w-fit bg-gradient-to-r from-yellow-400 to-yellow-600 text-zinc-900 text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md animate-ping-slow z-20 mb-3'
            aria-label='100% Job Guarantee'
          >
            100% Job Guarantee
          </div>

          {/* Title and Subtitle */}
          <Heading title={title} pos={'left'} />
          <p className='text-base text-zinc-500 mb-6 font-inter leading-relaxed'>
            {subtitle}
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <Link
              onClick={() => openModal(`Booking Form`)}
              className='px-8 py-3 hover:bg-zinc-200 hover:text-zinc-800 hover:border-zinc-800 cursor-pointer font-medium rounded-md bg-zinc-800 text-zinc-200 border border-zinc-200 transition-colors duration-200 flex items-center gap-2'
              aria-label='Inquire now'
            >
              Book Free Demo
            </Link>
            <Link
              onClick={() => openModal(`Brochure for`)}
              className='px-8 py-3 hover:bg-zinc-200 hover:text-zinc-800 hover:border-zinc-800 cursor-pointer font-medium rounded-md bg-zinc-800 text-zinc-200 border border-zinc-200 transition-colors duration-200 flex items-center gap-2'
              aria-label='Download brochure'
            >
              Download Brochure
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className='flex-1 md:mt-20'>
          <img
            src={imageUrl}
            alt={title}
            className=' rounded-lg shadow-md border border-zinc-800'
          />
        </div>
      </div>

      {/* Course Details */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-md text-center'>
          <div>
            <p className='text-sm text-zinc-600'>Duration</p>
            <p className='text-base font-semibold text-zinc-900'>{duration}</p>
          </div>
          <div>
            <p className='text-sm text-zinc-600'>Language</p>
            <p className='text-base font-semibold text-zinc-900'>{language}</p>
          </div>
          <div>
            <p className='text-sm text-zinc-600'>Job Guarantee</p>
            <p className='text-base font-semibold text-zinc-900'>
              {jobAssistance}
            </p>
          </div>
          <div>
            <p className='text-sm text-zinc-600'>Projects Covered</p>
            <p className='text-base font-semibold text-zinc-900'>10+</p>
          </div>
          <div>
            <p className='text-sm text-zinc-600'>Delivery Mode</p>
            <p className='text-base font-semibold text-zinc-900'>
              {deliveryMode}
            </p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        source={modalSource}
        context={title}
        isJobPage={false}
      />
    </section>
  );
};

export default CourseDetailedHero;
