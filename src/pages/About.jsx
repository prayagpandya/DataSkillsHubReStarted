import React from 'react';
import { FaUserCircle, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Heading from '../atoms/TypoGraphy/Heading';
import { assets } from '../utils/assets';

const AboutUs = () => {
  return (
    <div className='scroll-smooth  text-zinc-800  min-h-screen'>
      {/* Hero Section */}
      <div className='relative max-h-[70vh] h-screen overflow-hidden'>
        <img
          src={assets.aboutBg}
          className='w-full h-full object-cover'
          alt='About background featuring shipping containers and cranes'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 flex flex-col items-center justify-center text-center p-4 md:p-8'>
          <div className='w-full lg:w-3/4 p-6 md:p-8'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-500 tracking-tight leading-tight animate-fadeIn'>
              Your Bridge to IT Excellence and Opportunity
            </h1>
          </div>
        </div>
      </div>

      {/* About Ricky Export */}
      <div id='about' className='max-w-7xl mx-auto px-4 py-16 -mt-10'>
        <Heading title={'About Us'} pos={'center'} />
        <div className='flex flex-col md:flex-row justify-around gap-8 items-center'>
          <div
            data-aos='fade-right'
            data-aos-duration='500'
            className='md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg'
          >
            <video
              src={assets.homeAboutVideo}
              muted
              loop
              autoPlay
              className='w-full h-64 md:h-80 object-cover'
              poster='https://via.placeholder.com/640x360?text=Video+Preview'
            />
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='500'
            className='md:w-1/2 w-full space-y-6 text-sm md:text-base leading-relaxed'
          >
            <p className='text-black '>
              Data Skills Hub is your trusted partner in IT upskilling and
              staffing solutions. We are dedicated to empowering individuals
              with the skills and expertise required to succeed in the
              fast-paced, ever-changing world of technology. Our expertly
              crafted upskilling programs are tailored to provide professionals
              with the latest industry knowledge, ensuring they stay ahead in
              the dynamic IT landscape.
            </p>
            <p className='text-black '>
              Beyond upskilling, Data Skills Hub excels in delivering innovative
              staffing solutions, seamlessly connecting talented professionals
              with career opportunities at leading companies. We are committed
              to nurturing career growth and enabling strategic talent placement
              that drives success for both individuals and organizations. Join
              us on a transformative journey where IT excellence meets
              exceptional staffing solutions, paving the way for your bright
              future in technology.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Purpose */}
      {/* <div className='max-w-7xl mx-auto px-4 py-16 -mt-16'>
        <Heading title={'Our Values'} pos={'center'} />
        <div className='flex flex-col md:flex-row gap-8 justify-around'>
          <div className='flex-1 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <FaUserCircle className='text-6xl text-zinc-800  mx-auto mb-4' />
            <h2 className='text-2xl font-semibold text-zinc-800  text-center mb-2'>
              Our Mission
            </h2>
            <p className='text-sm md:text-base text-zinc-800  text-center'>
              To deliver high-quality engineered products across diverse
              industries by leveraging advanced manufacturing techniques,
              innovation, and a commitment to excellence. We aim to build
              lasting relationships with our customers through integrity,
              reliability, and unmatched service.
            </p>
          </div>
          <div className='flex-1 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <FaUserCircle className='text-6xl text-zinc-800  mx-auto mb-4' />
            <h2 className='text-2xl font-semibold text-zinc-800  text-center mb-2'>
              Our Mission
            </h2>
            <p className='text-sm md:text-base text-zinc-800  text-center'>
              To deliver high-quality engineered products across diverse
              industries by leveraging advanced manufacturing techniques,
              innovation, and a commitment to excellence. We aim to build
              lasting relationships with our customers through integrity,
              reliability, and unmatched service.
            </p>
          </div>
          <div className='flex-1 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <FaUserCircle className='text-6xl text-zinc-800  mx-auto mb-4' />
            <h2 className='text-2xl font-semibold text-zinc-800  text-center mb-2'>
              Our Mission
            </h2>
            <p className='text-sm md:text-base text-zinc-800  text-center'>
              To deliver high-quality engineered products across diverse
              industries by leveraging advanced manufacturing techniques,
              innovation, and a commitment to excellence. We aim to build
              lasting relationships with our customers through integrity,
              reliability, and unmatched service.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

// Custom animation for fade-in effect
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out;
  }
  .delay-1s {
    animation-delay: 1s;
  }
  .delay-2s {
    animation-delay: 2s;
  }
`;

// Inject styles into the document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default AboutUs;
