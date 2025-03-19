import React from 'react';

import CommonHero from '../molicules/CommonHero';
import CoursePageCards from '../organisms/CoursePageCards';

const Courses = () => {
  return (
    <div>
      <CommonHero
        title={'Unleash Your Potential with Our Upskilling Courses'}
        description={
          'Learn the skills you need to succeed in the digital world.'
        }
      />
      <CoursePageCards />
    </div>
  );
};

export default Courses;
