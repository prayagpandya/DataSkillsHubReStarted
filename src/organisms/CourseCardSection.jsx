// CourseSection.jsx
import React from 'react';

import CourseCard from '../molicules/CourseCard';
import { assets } from '../utils/assets';

const CourseSection = () => {
  const courses = [
    {
      courseName: 'Product & Project Management with Gen AI',
      description: 'Master data-driven decision-making for global markets.',
      backgroundImage: assets.course1BusinessAnalytics,
    },
    {
      courseName: 'Data Analyst',
      description: 'Lead innovative products with AI integration.',
      backgroundImage: assets.ProjectMAnagement,
    },
    {
      courseName: 'Business Analyst',
      description: 'Build end-to-end web solutions for top industries.',
      backgroundImage: assets.fullStackDev,
    },
    {
      courseName: 'Data Science with Gen AI',
      description: 'Unleash the power of AI and data science.',
      backgroundImage: assets.GenAi,
    },
    {
      courseName: 'Digital Marketing with AI',
      description: 'Boost campaigns with AI-powered strategies.',
      backgroundImage: assets.DigitalMarketing,
    },
    {
      courseName: 'UI/UX Design',
      description: 'Craft user-centric designs for global impact.',
      backgroundImage: assets.uiux,
    },
  ];

  return (
    <section className='py-6 bg-gradient-to-br from-zinc-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Course Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              courseName={course.courseName}
              description={course.description}
              backgroundImage={course.backgroundImage}
              buttonText='Learn More'
            />
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className='text-center mt-12'>
          <p className='text-lg text-zinc-700 mb-4'>
            Secure your future with guaranteed job-ready skills!
          </p>
          <a
            href='#'
            className='inline-block px-8 py-3 text-lg font-semibold text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-300'
          >
            Start Your Journey
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default CourseSection;
