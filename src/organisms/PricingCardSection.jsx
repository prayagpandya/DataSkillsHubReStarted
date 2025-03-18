import React from 'react';

import PricingCard from '../molicules/PriceCard';

const PricingSection = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-zinc-900 mb-4'>
            Simple, Transparent Pricing
          </h2>
          <p className='text-lg text-zinc-600'>
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <PricingCard
            plan='Standard'
            price={999}
            // billingCycle='$'
            billed='Online Live Training'
            features={[
              'Live 1-on-1 Training',
              'Resume Building',
              'Cover Letter Writing',
              'Mock Interview Practice',
              'Interview Referrals',
            ]}
            buttonText='Get Started'
            buttonLink='/courses'
            highlighted={true}
          />
          <PricingCard
            plan='Pro'
            price={1499}
            // billingCycle='$'
            billed='Online Live Training + Guaranteed Job Placement'
            features={[
              'Live 1-on-1 Training',
              'Resume Building',
              'Cover Letter Writing',
              'Mock Interview Practice',
              'Interview Referrals',
              'Dedicated Account Manager',
              'Resume Marketing',
              '100% Guaranteed Interviews',
              'Interview Support',
            ]}
            buttonText='Go Pro'
            buttonLink='/Courses'
            highlighted={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
