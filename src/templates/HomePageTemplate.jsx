import React from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import Marquee from '../molicules/Marquee';
import AffordableStripHome from '../organisms/AffordableStripHome';
import PopularBlogsComponent from '../organisms/Blogs';
import CourseSection from '../organisms/CourseCardSection';
import CoursePageCards from '../organisms/CoursePageCards';
import Hero from '../organisms/Hero';
import HomeAbSection from '../organisms/HomeAbSection';
import HomeServices from '../organisms/HomeServices';
import HowItWorks from '../organisms/HowItWorks';
import TestimonialComponent from '../organisms/TestiMonials';

const HomePageTemplate = () => {
  return (
    <section>
      <Hero />
      <Marquee />
      <HomeAbSection />
      <HomeServices />
      {/* <Heading title={'Explore Our Courses'} /> */}
      {/* <CourseSection /> */}
      <CoursePageCards />
      <AffordableStripHome />
      <HowItWorks />
      <TestimonialComponent />
      <PopularBlogsComponent />
    </section>
  );
};

export default HomePageTemplate;
