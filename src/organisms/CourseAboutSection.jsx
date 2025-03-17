import { CircleCheck } from 'lucide-react';
import React from 'react';

import { assets } from '../utils/assets';

const CourseAboutSection = ({ info }) => {
  // Map the about.points object into an array of benefits for rendering
  const benefits = Object.entries(info.about.points).map(
    ([key, description]) => ({
      title: key
        .replace(/([A-Z])/g, ' $1') // Convert camelCase to Title Case (e.g., careerTransition -> Career Transition)
        .replace(/^./, (str) => str.toUpperCase()), // Capitalize first letter
      description,
    })
  );

  // Stats can be dynamic too, but for now, we'll use the same stats as before
  const stats = [
    { value: '500+', label: 'Hiring Partners' },
    { value: '1,000+', label: 'Career Transitions' },
    { value: '6 LPA', label: 'Highest Package' },
  ];

  return (
    <section className='py-10'>
      {/* Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8'>
        {/* Left Side: Text and Benefits */}
        <div className='flex-1'>
          {/* Title and Subtitle */}
          <h2 className='text-3xl font-bold text-zinc-900 mb-4 leading-tight'>
            {info.about.heading}
          </h2>
          <p className='text-base text-zinc-600 mb-6 leading-relaxed'>
            Explore the top {info.courseName.toLowerCase()} course online. Learn
            cutting-edge skills with hands-on training, and prepare for a
            rewarding career with 100% guaranteed interviews. Enroll today!
          </p>

          {/* Benefits List */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex items-start gap-3'>
                <CircleCheck className='max-w-5 min-w-5 min-h-5 max-h-5 text-zinc-900' />
                <div>
                  <h3 className='text-base font-semibold text-zinc-900'>
                    {benefit.title}
                  </h3>
                  <p className='text-sm text-zinc-600'>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className='flex-1'>
          <img
            src={assets.courseDetailedImg} // Replace with dynamic image if available
            alt={info.courseName}
            className='w-full h-auto rounded-lg shadow-md'
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white p-4 rounded-lg shadow-md text-center border border-zinc-200 hover:shadow-lg transition-shadow duration-200'
            >
              <p className='text-2xl font-bold text-zinc-900'>{stat.value}</p>
              <p className='text-sm text-zinc-600'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseAboutSection;
