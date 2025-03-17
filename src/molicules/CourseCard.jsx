import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({
  courseName,
  description,
  backgroundImage,
  buttonText = 'Learn More',
}) => {
  return (
    <div
      className='relative flex flex-col rounded-2xl border border-zinc-300 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-zinc-900/5 backdrop-blur-sm'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
      }}
    >
      {/* Overlay for Contrast */}
      <div className='absolute inset-0 bg-zinc-900/70 hover:bg-zinc-900/75 transition-opacity duration-300'></div>

      {/* 100% Job Guarantee Badge */}
      <div
        className='absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-zinc-900 text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md animate-ping-slow z-20'
        aria-label='100% Job Guarantee'
      >
        100% Job Guarantee
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col justify-between h-full px-6 py-8 sm:p-10 text-white mt-10'>
        <div>
          <h3 className='text-xl font-semibold tracking-tight lg:text-2xl drop-shadow-lg'>
            {courseName}
          </h3>
          <p className='mt-3 text-sm font-light text-zinc-200 lg:text-base drop-shadow-md'>
            {description}
          </p>
        </div>
        <div className='mt-6'>
          <Link
            aria-describedby={`course-${courseName
              .toLowerCase()
              .replace(/ /g, '-')}`}
            className='inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-semibold tracking-wide text-zinc-900 uppercase bg-zinc-200 border border-zinc-800 hover:text-zinc-200 rounded-full hover:bg-zinc-800 hover:border-zinc-600 hover:scale-102 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500'
            to={`/courses/${courseName}`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
