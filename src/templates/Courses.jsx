import React from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import CourseSection from '../organisms/CourseCardSection';

const CoursesTemplate = () => {
  return (
    <div>
      <Heading title={'All Courses'} />
      <CourseSection />
    </div>
  );
};

export default CoursesTemplate;
