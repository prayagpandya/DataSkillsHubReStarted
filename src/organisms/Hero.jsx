import React from 'react';
import { LuMessageSquareDot, LuUsersRound } from 'react-icons/lu';
import { SlBriefcase } from 'react-icons/sl';
import { TbMessageUser } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import StatCard from '../molicules/StatCard';
import { assets } from '../utils/assets';

const Hero = () => {
  return (
    <div className='relative w-full min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Video Background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={assets.homeHeroVideo}
        autoPlay
        loop
        muted
      />
      <div className='absolute inset-0 bg-zinc-900/70'></div>
      <div className='relative z-10 w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20'>
        <div className='text-left lg:mt-96 mt-48  max-w-[95%] sm:max-w-[90%] md:max-w-7xl mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white max-w-4xl mx-auto lg:mx-0'>
            Your Dream Job Awaits:
            <br className='hidden sm:inline' />
            Let's Make It Happen
          </h1>
          <p className='mt-3 sm:mt-4 md:mt-6 text-zinc-300 font-open-sans text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl sm:max-w-3xl mx-auto lg:mx-0'>
            Discover new skills outside the classroom, with guidance from most
            accomplished industry mentors.
          </p>
          <Link
            to='/courses'
            className='mt-4 sm:mt-6 md:mt-8 inline-block px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-white text-zinc-900 font-medium rounded-md hover:bg-zinc-100 transition-colors duration-200 text-sm sm:text-base md:text-lg'
          >
            Explore Now
          </Link>
        </div>

        {/* Stats Cards */}
        <div className='mt-8 sm:mt-12 md:mt-16 hidden lg:grid  lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl mx-auto'>
          <StatCard Icon={<LuUsersRound />} title='One-On-One Training' />
          <StatCard
            Icon={<LuMessageSquareDot />}
            title='Dedicated Recruiter Support'
          />
          <StatCard Icon={<SlBriefcase />} title='Full Job Market Access' />
          <StatCard Icon={<TbMessageUser />} title='Mock Interviews Sessions' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
