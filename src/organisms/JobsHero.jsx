import React from 'react';

const JobsHero = () => {
  return (
    <section
      className='jobs-hero bg-white text-center'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        height: '30vh', // Compact yet effective
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='container mx-auto px-6 flex flex-col justify-center items-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight tracking-tight drop-shadow-xl'>
          Launch Your Dream Career
        </h1>
        <p className='text-sm sm:text-base lg:text-lg text-white max-w-xl mx-auto font-normal opacity-90 leading-relaxed'>
          Discover opportunities that align with your skills and shape
          tomorrow’s world.
        </p>
      </div>
    </section>
  );
};

export default JobsHero;
