import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Marquee from '../molicules/Marquee';
import CourseAboutSection from '../organisms/CourseAboutSection';
import CourseDetailedHero from '../organisms/CourseDetailHero';
import CourseOfferingsSection from '../organisms/CourseOfferings';
import FAQSection from '../organisms/FAQSection';
import HowItWorks from '../organisms/HowItWorks';
import PricingSection from '../organisms/PricingCardSection';
import { coursesData } from '../utils/data';

const CourseDetailedPage = () => {
  // Get the course name from URL params (e.g., /courses/:courseName)
  const params = useParams();
  console.log('Raw Params:', params); // Debug raw params object

  // Decode the URL parameter and normalize it
  const decodedCourseName = decodeURIComponent(params.courseName || '').trim();
  console.log('Decoded Course Name from URL:', decodedCourseName); // Debugging

  // Find the course that matches the URL parameter
  const selectedCourse = coursesData.find(
    (course) =>
      course.courseName.toLowerCase() === decodedCourseName.toLowerCase()
  );

  // Fallback to first course or show error if no match
  if (!selectedCourse) {
    console.log(
      'No matching course found. Decoded Name:',
      decodedCourseName,
      'Available Names:',
      coursesData.map((c) => c.courseName)
    );
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
        <h2 className='text-3xl font-bold text-gray-900'>Course Not Found</h2>
        <p className='text-gray-600 mt-4'>
          The course you're looking for doesn't exist.{' '}
          <Link to='/courses' className='text-blue-600 hover:underline'>
            Go back to courses
          </Link>
        </p>
      </div>
    );
  }

  console.log('Selected Course:', selectedCourse.courseName); // Debugging

  return (
    <div>
      <CourseDetailedHero
        title={selectedCourse.courseName}
        subtitle={selectedCourse.description}
        imageUrl={selectedCourse.imageUrl}
<<<<<<< HEAD
        brochureUrl={selectedCourse.brochureUrl}
=======
>>>>>>> 5fc7e2743e67c20921242aff1ad42a9715a1db31
        startDate='29 December 2024'
        duration='3 Months'
        language='English'
        jobAssistance='Job Assistance'
        deliveryMode='Live'
      />
      <CourseAboutSection info={selectedCourse} />
      <CourseOfferingsSection />
      <Marquee />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default CourseDetailedPage;
