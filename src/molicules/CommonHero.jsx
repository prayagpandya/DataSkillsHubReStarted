import React from 'react';

import { assets } from '../utils/assets';

const CommonHero = ({ title, description }) => {
  return (
    <section
      className='jobs-hero bg-white text-center'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${assets.heroImageCommon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundBlendMode: 'multiply',
        height: '60vh', // Compact yet effective
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='container mx-auto px-6 flex flex-col justify-center items-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight tracking-tight drop-shadow-xl'>
          {title}
        </h1>
        <p className='text-sm sm:text-base lg:text-md text-white max-w-xl mx-auto font-normal opacity-90 leading-relaxed'>
          {description}
        </p>
      </div>
    </section>
  );
};

export default CommonHero;
