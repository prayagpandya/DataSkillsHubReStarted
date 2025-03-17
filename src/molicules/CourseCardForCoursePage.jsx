import React from 'react';
import { Link } from 'react-router-dom';

const CourseCardForCoursePage = ({
  courseName,
  description,
  imageUrl,
  buttonText = 'Learn More',
}) => {
  return (
    <div className='relative flex flex-col rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white min-h-[450px]'>
      {/* 100% Job Guarantee Badge */}
      <div
        className='absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 text-xs font-bold uppercase px-4 py-1.5 rounded-full shadow-md animate-pulse z-20'
        aria-label='100% Job Guarantee'
      >
        100% Job Guarantee
      </div>

      {/* Course Image */}
      <div className='w-full h-48 overflow-hidden rounded-t-2xl'>
        <img
          src={imageUrl}
          alt={courseName}
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col flex-1 p-6'>
        {/* Title and Description Container with Fixed Growth */}
        <div className='flex flex-col flex-1 space-y-4'>
          {/* Course Title */}
          <h3 className='text-2xl font-semibold font-inter text-gray-900 tracking-tight'>
            {courseName}
          </h3>

          {/* Description */}
          <p className='text-base font-poppins text-gray-600 leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Button - Aligned at the Bottom */}
        <div className='mt-6'>
          <Link
            aria-describedby={`course-${courseName
              .toLowerCase()
              .replace(/ /g, '-')}`}
            className='inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase bg-gradient-to-r from-gray-800 to-gray-900 rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500'
            to={`/courses/${encodeURIComponent(courseName)}`} // Ensure proper encoding
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCardForCoursePage;
