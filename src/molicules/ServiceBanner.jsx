import React from 'react';

const HeroBanner = () => {
  return (
    <div
      className='relative bg-zinc-800 text-zinc-200 font-open-sans h-[40vh] flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className='absolute inset-0 bg-black/50 '></div>

      <div className='relative z-10'>
        <h3 className='text-3xl font-semibold text-center'>
          From Skills to Solutions, We’ve Got You Covered
        </h3>
      </div>
    </div>
  );
};

export default HeroBanner;
