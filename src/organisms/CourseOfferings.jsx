import {
  FaBook,
  FaVideo,
  FaQuestionCircle,
  FaDumbbell,
  FaClipboardList,
  FaUserTie,
  FaCertificate,
  FaStamp,
} from 'react-icons/fa';
import React from 'react';

const CourseOfferingsSection = () => {
  const offerings = [
    { icon: FaBook, text: 'Career Centric Syllabus' },
    { icon: FaVideo, text: 'Industry Experts Led Live Sessions' },
    { icon: FaQuestionCircle, text: 'Doubt Clearing Session' },
    { icon: FaDumbbell, text: 'Skill Elevation: Practice Exercises' },
    { icon: FaClipboardList, text: 'Industry Relevant Project' },
    { icon: FaUserTie, text: 'Interview Preparation' },
    { icon: FaCertificate, text: 'Certificate' },
    { icon: FaStamp, text: 'Job Guarantee' },
  ];

  return (
    <section className=' py-10'>
      {/* Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <h2 className='text-3xl font-bold text-zinc-900 text-center mb-8 leading-tight'>
          Course Offerings
        </h2>

        {/* Offerings Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md border border-zinc-200 hover:shadow-lg transition-shadow duration-200 text-center flex flex-col items-center'
              >
                <Icon className='w-12 h-12 text-zinc-600 mb-4' />
                <p className='text-base text-zinc-900 font-medium'>
                  {offering.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseOfferingsSection;
