import React from 'react';

const HeroBanner = () => {
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
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight tracking-tight drop-shadow-xl'>
          Transforming Your Vision into Reality with Our Expert Services
        </h1>
        <p className='text-sm sm:text-base lg:text-md text-white max-w-xl mx-auto font-normal opacity-90 leading-relaxed'>
          We provide top-notch solutions tailored to your needs, combining
          innovation, expertise, and dedication. Let’s build something great
          together.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
