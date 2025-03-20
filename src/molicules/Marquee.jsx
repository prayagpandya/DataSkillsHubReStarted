import React, { useRef } from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import { assets } from '../utils/assets';

const Marquee = () => {
  const topMarqueeRef = useRef(null);
  const bottomMarqueeRef = useRef(null);

  const placeholders = [
    { id: 1, url: assets.cmpn1, alt: 'Amazon' },
    { id: 2, url: assets.cmpn2, alt: 'Apple' },
    { id: 3, url: assets.cmpn3, alt: 'CVS Health' },
    { id: 4, url: assets.cmpn4, alt: 'Deloitte' },
    { id: 5, url: assets.cmpn5, alt: 'Eye' },
    { id: 6, url: assets.cmpn6, alt: 'KPMG' },
    { id: 7, url: assets.cmpn7, alt: 'PWC' },
    { id: 8, url: assets.cmpn8, alt: 'Mastercard' },
    { id: 9, url: assets.cmpn9, alt: 'Microsoft' },
    { id: 10, url: assets.cmpn10, alt: 'Morgan Stanley' },
    { id: 11, url: assets.cmpn11, alt: 'Olympus' },
    { id: 12, url: assets.cmpn12, alt: 'Cisco' },
    { id: 13, url: assets.cmpn13, alt: 'Ripple' },
    { id: 14, url: assets.cmpn14, alt: 'Scotiabank' },
    { id: 15, url: assets.cmpn15, alt: 'Square' },
    { id: 16, url: assets.cmpn16, alt: 'Stripe' },
    { id: 17, url: assets.cmpn17, alt: 'Tata' },
    { id: 18, url: assets.cmpn18, alt: 'Walmart' },
  ];

  const handleMouseEnter = (ref) => {
    if (ref.current) {
      ref.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) {
      ref.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className='relative bg-white py-8 sm:py-12 md:py-16 overflow-hidden border-y border-gray-200'>
      {/* Heading */}
      <Heading
        title='Our Placement Partners'
        className='text-center text-gray-800 font-poppins text-2xl md:text-4xl font-semibold mb-8 sm:mb-10 md:mb-12 tracking-tight'
      />

      {/* Marquee Container */}
      <div className='relative px-4 sm:px-6 md:px-8'>
        <div className='absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none'></div>
        <div className='absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none'></div>

        <div
          ref={topMarqueeRef}
          className='flex animate-marquee whitespace-nowrap mb-6 sm:mb-8 md:mb-10'
          onMouseEnter={() => handleMouseEnter(topMarqueeRef)}
          onMouseLeave={() => handleMouseLeave(topMarqueeRef)}
        >
          {[...placeholders, ...placeholders].map((placeholder, index) => (
            <div
              key={`top-${placeholder.id}-${index}`}
              className='mx-3 sm:mx-4 md:mx-6 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg'
            >
              <div className='relative w-32 sm:w-36 md:w-44 h-20 sm:h-24 md:h-28 flex items-center justify-center backdrop-blur-sm rounded-md shadow-sm border-2 border-zinc-300'>
                <img
                  src={placeholder.url}
                  alt={placeholder.alt}
                  aria-label={`Logo of ${placeholder.alt}`}
                  className='w-24 sm:w-28 md:w-36 h-14 sm:h-16 md:h-20 object-contain rounded-sm mix-blend-multiply'
                />
              </div>
            </div>
          ))}
        </div>

        <div
          ref={bottomMarqueeRef}
          className='flex animate-marqueeReverse whitespace-nowrap'
          onMouseEnter={() => handleMouseEnter(bottomMarqueeRef)}
          onMouseLeave={() => handleMouseLeave(bottomMarqueeRef)}
        >
          {[...placeholders, ...placeholders].map((placeholder, index) => (
            <div
              key={`bottom-${placeholder.id}-${index}`}
              className='mx-3 sm:mx-4 md:mx-6 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg'
            >
              <div className='relative w-32 sm:w-36 md:w-44 h-20 sm:h-24 md:h-28 flex items-center justify-center backdrop-blur-sm rounded-md shadow-sm border-2 border-zinc-300'>
                <img
                  src={placeholder.url}
                  alt={placeholder.alt}
                  aria-label={`Logo of ${placeholder.alt}`}
                  className='w-24 sm:w-28 md:w-36 h-14 sm:h-16 md:h-20 object-contain rounded-sm mix-blend-multiply'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marqueeReverse {
          animation: marqueeReverse 20s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee,
          .animate-marqueeReverse {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
