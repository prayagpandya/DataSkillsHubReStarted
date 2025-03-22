/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { FaUserCircle, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Heading from '../atoms/TypoGraphy/Heading';
import CommonHero from '../molicules/CommonHero';
import CustomizedTimeline from '../molicules/Timeline';
import ITCompanyTimeline from '../molicules/Timeline';
import DataSkillsHubTimeline from '../molicules/Timeline';
import DataSkillsHubTimelineMobile from '../molicules/TimeLineMobile';
import { assets } from '../utils/assets';

const AboutUs = () => {
  return (
    <div className='scroll-smooth  text-zinc-800  min-h-screen'>
      {/* Hero Section */}
      <CommonHero
        title={'Welcome to Data Skills Hub'}
        description={'Your Bridge to IT Excellence and Opportunities'}
      />
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
      <div className='max-w-7xl mx-auto px-4 py-16 -mt-16'>
        <div className='flex flex-col md:flex-row gap-8 justify-around'>
          <div className='flex-1 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <FaUserCircle className='text-6xl text-zinc-800 mx-auto mb-4' />
            <h2 className='text-2xl font-semibold text-zinc-800 text-center mb-2'>
              Our Vision
            </h2>
            <p className='text-sm md:text-base text-zinc-800 text-justify'>
              To be a global leader in IT upskilling and staffing, bridging the
              gap between talent and opportunity with innovation and excellence,
              enabling individuals and businesses to thrive in a tech-driven
              world.
            </p>
          </div>

          <div className='flex-1 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <FaUserCircle className='text-6xl text-zinc-800 mx-auto mb-4' />
            <h2 className='text-2xl font-semibold text-zinc-800 text-center mb-2'>
              Our Mission
            </h2>
            <p className='text-sm md:text-base text-zinc-800 text-justify'>
              At Data Skills Hub, we empower professionals through cutting-edge
              IT upskilling programs and strategic staffing. We connect talent
              with opportunities, fostering career growth and business success
              through high-quality training and placements.
            </p>
          </div>

          <div className='flex-1 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <FaUserCircle className='text-6xl text-zinc-800 mx-auto mb-4' />
            <h2 className='text-2xl font-semibold text-zinc-800 text-center mb-2'>
              Our Values
            </h2>
            <p className='text-sm md:text-base text-zinc-800 text-justify'>
              We stand for excellence, innovation, and empowerment. Our approach
              integrates integrity, collaboration, and inclusivity to build a
              transparent, diverse, and future-ready tech community.
            </p>
          </div>
        </div>
      </div>

      <div className='hidden md:block'>
        <DataSkillsHubTimeline />
      </div>
      <div className='md:hidden'>
        <DataSkillsHubTimelineMobile />
      </div>
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
