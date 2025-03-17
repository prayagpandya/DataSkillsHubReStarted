import React from 'react';

import CourseCardForCoursePage from '../molicules/CourseCardForCoursePage';
import { coursesData } from '../utils/data';

const CoursePageCards = () => {
  return (
    <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Heading */}
        <h2 className='text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight'>
          Discover Our Top Courses
        </h2>

        {/* Grid Layout for Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {coursesData.map((course, index) => (
            <CourseCardForCoursePage
              key={index}
              courseName={course.courseName}
              description={course.desc2}
              imageUrl={course.imageUrl}
              buttonText={course.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePageCards;
