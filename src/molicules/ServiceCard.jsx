import React from 'react';

const ServiceCard = ({
  planName,
  description,
  buttonText = 'Get Started',
  backgroundImage,
}) => {
  return (
    <div
      className='relative flex flex-col rounded-3xl border border-zinc-400 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-zinc-900/5 backdrop-blur-sm'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '320px',
      }}
    >
      <div className='absolute inset-0 bg-zinc-900/75 hover:bg-zinc-900/80 transition-opacity duration-300'></div>

      <div className='relative z-10 flex flex-col justify-between h-full px-6 py-8 sm:p-10'>
        <div>
          <h2 className='text-xl font-inter font-semibold tracking-tight text-zinc-50 lg:text-3xl drop-shadow-lg'>
            {planName}
          </h2>
          <p className='mt-4 text-sm font-light text-zinc-200 lg:text-base drop-shadow-md'>
            {description}
          </p>
        </div>

        <div className='mt-8'>
          <a
            aria-describedby={`tier-${planName.toLowerCase()}`}
            className='inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold tracking-wide text-zinc-800 hover:text-zinc-100 uppercase transition-all duration-300 bg-zinc-200 border-2 border-transparent rounded-full hover:bg-zinc-800 hover:border-zinc-600 hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500'
            href='#'
          >
            {buttonText}
          </a>
        </div>
      </div>
      {/* 
      <div className='absolute top-0 right-0 w-28 h-28 opacity-25 pointer-events-none'>
        <svg viewBox='0 0 100 100' className='fill-current text-zinc-400'>
          <path
            d='M50 0 L100 50 L50 100 L0 50 Z'
            transform='rotate(45 50 50)'
          />
        </svg>
      </div> */}

      <div className='absolute inset-0 rounded-3xl border border-zinc-700/50 pointer-events-none'></div>
    </div>
  );
};

export default ServiceCard;
