import React from 'react';
import { LuMessageSquareDot, LuUsersRound } from 'react-icons/lu';
import { SlBriefcase } from 'react-icons/sl';
import { TbMessageUser } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import StatCard from '../molicules/StatCard';
import { assets } from '../utils/assets';

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={assets.homeHeroVideo}
        autoPlay
        loop
        muted
      />
      <div className='absolute inset-0 bg-zinc-900/70'></div>
      <div className='relative z-10 -ml-64  mr-80 text-white px-6'>
        <h1 className='text-4xl md:text-5xl font-semibold leading-snug'>
          Your Dream job Awaits: <br className='mt-4' /> Let's Make It Happen
        </h1>
        <p className='mt-4 text-zinc-300 font-open-sans text-lg md:text-xl max-w-2xl'>
          Discover new skills outside the classroom, with guidance from most
          accomplished industry mentors.
        </p>
        <Link
          to='/courses'
          className='mt-6 inline-block px-8 py-3 bg-white text-zinc-900 font-medium rounded-md hover:bg-zinc-100 transition-colors duration-200'
        >
          Explore Now
        </Link>
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-10 mt-20'>
        <StatCard Icon={<LuUsersRound />} title='One-On-One Training' />
        <StatCard
          Icon={<LuMessageSquareDot />}
          title='Dedicated Recruiter Support'
        />
        <StatCard Icon={<SlBriefcase />} title='Full Job Market Access' />
        <StatCard Icon={<TbMessageUser />} title='Mock Interviews Sessions' />
      </div>
    </div>
  );
};

export default Hero;
