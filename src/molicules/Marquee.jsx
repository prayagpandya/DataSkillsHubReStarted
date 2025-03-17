import React from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import { assets } from '../utils/assets';

const Marquee = () => {
  // Updated placeholder data with diverse logo URLs
  const placeholders = [
    {
      id: 1,
      url: assets.cmpn1,
      alt: 'Amazon',
    },
    {
      id: 2,
      url: assets.cmpn2,
      alt: 'Apple',
    },
    {
      id: 3,
      url: assets.cmpn3,
      alt: 'CVS Health',
    },
    {
      id: 4,
      url: assets.cmpn4,
      alt: 'Deloitte',
    },
    {
      id: 5,
      url: assets.cmpn5,
      alt: 'Eye',
    },
    {
      id: 6,
      url: assets.cmpn6,
      alt: 'KPMG',
    },
    {
      id: 7,
      url: assets.cmpn7,
      alt: 'PWC',
    },
    {
      id: 8,
      url: assets.cmpn8,
      alt: 'Mastercard',
    },
    {
      id: 9,
      url: assets.cmpn9,
      alt: 'Microsoft',
    },
    {
      id: 10,
      url: assets.cmpn10,
      alt: 'Morgan Stanley',
    },
    {
      id: 11,
      url: assets.cmpn11,
      alt: 'Olympus',
    },
    {
      id: 12,
      url: assets.cmpn12,
      alt: 'Cisco',
    },
    {
      id: 13,
      url: assets.cmpn13,
      alt: 'Ripple',
    },
    {
      id: 14,
      url: assets.cmpn14,
      alt: 'Scotiabank',
    },
    {
      id: 15,
      url: assets.cmpn15,
      alt: 'Square',
    },
    {
      id: 16,
      url: assets.cmpn16,
      alt: 'Stripe',
    },
    {
      id: 17,
      url: assets.cmpn17,
      alt: 'Tata',
    },
    {
      id: 18,
      url: assets.cmpn18,
      alt: 'Walmart',
    },
  ];

  return (
    <div className='relative bg-white py-12 overflow-hidden border-y border-gray-200'>
      {/* Heading */}
      <Heading
        title='Our Placement Partners'
        className='text-center text-gray-800 font-poppins text-3xl md:text-4xl font-semibold mb-10 tracking-tight'
      />

      {/* Marquee Container */}
      <div className='relative'>
        {/* Gradient overlays for fade effect */}
        <div className='absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10'></div>
        <div className='absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10'></div>

        {/* Top Marquee (Left to Right) */}
        <div className='flex animate-marquee whitespace-nowrap mb-8'>
          {[...placeholders, ...placeholders].map((placeholder) => (
            <div
              key={`top-${placeholder.id}`}
              className='mx-6 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg'
            >
              <div className='relative w-44 h-28 flex items-center justify-center  backdrop-blur-sm rounded-md shadow-sm border-2 border-zinc-300'>
                <img
                  src={placeholder.url}
                  alt={placeholder.alt}
                  className='w-36 h-20 object-contain rounded-sm mix-blend-multiply'
                />
                {/* Subtle burn effect overlay */}
                {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-md'></div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Marquee (Right to Left) */}
        <div className='flex animate-marqueeReverse whitespace-nowrap'>
          {[...placeholders, ...placeholders].map((placeholder) => (
            <div
              key={`bottom-${placeholder.id}`}
              className='mx-6 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg'
            >
              <div className='relative w-44 h-28 flex items-center justify-center  backdrop-blur-sm rounded-md shadow-sm border-2 border-zinc-300'>
                <img
                  src={placeholder.url}
                  alt={placeholder.alt}
                  className='w-36 h-20 object-contain rounded-sm mix-blend-multiply'
                />
                {/* Subtle burn effect overlay */}
                {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-md'></div> */}
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
          animation: marquee 15s linear infinite;
        }
        .animate-marqueeReverse {
          animation: marqueeReverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
