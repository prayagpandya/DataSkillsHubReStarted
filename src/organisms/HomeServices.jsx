import React from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import Paragraph from '../atoms/TypoGraphy/Paragraph';
import ServiceCard from '../molicules/ServiceCard';
import { assets } from '../utils/assets';

const HomeServices = () => {
  return (
    <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Heading
          title='Our Services'
          className='text-4xl md:text-5xl font-bold text-center text-gray-800'
        />
        {/* <Paragraph
            className={'my'}
          data={`Our company offers a comprehensive suite of services to meet all your IT needs. We provide top-notch staffing solutions, cutting-edge online courses, and expert web and mobile development. Additionally, we specialize in data science and quality assurance (QA) services to ensure your projects excel. Whether you're looking to enhance your team's capabilities or advance your own skills, we've got you covered.`}
        /> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <ServiceCard
            planName='Upskill Course'
            description='Master in-demand skills for your dream job.'
            buttonText='Explore Now'
            backgroundImage={assets.upSkill}
          />
          <ServiceCard
            planName='Job Exploration'
            description='Discover opportunities in the US & Canada.'
            buttonText='Explore Now'
            backgroundImage={assets.jobExploration}
          />
          <ServiceCard
            planName='Invoice & Billing Management Software'
            description='Manage invoices and billing efficiently with our software.'
            buttonText='Explore Now'
            backgroundImage={assets.invoice}
          />
          <ServiceCard
            planName='Mobile App Development'
            description='Build mobile apps for android and iOS.'
            buttonText='Explore Now'
            backgroundImage={assets.androidDev}
          />
          <ServiceCard
            planName='Web Development'
            description='Build websites and web applications with our expertise.'
            buttonText='Explore Now'
            backgroundImage={assets.webDev}
          />
          <ServiceCard
            planName='Software Development'
            description='Build skills for high-paying tech roles.'
            buttonText='Explore Now'
            backgroundImage={assets.softwareDev}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
