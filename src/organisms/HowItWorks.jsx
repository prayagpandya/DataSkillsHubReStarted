import React from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import Paragraph from '../atoms/TypoGraphy/Paragraph';
import WorkCard from '../molicules/WorkCard';

const HowItWorks = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Initiation',
      description:
        'Begin your journey with an in-depth consultation to understand your career goals.',
    },
    {
      stepNumber: 2,
      title: 'Scheduling',
      description:
        'Set up your personalized training and job placement timeline.',
    },
    {
      stepNumber: 3,
      title: 'Contracts & Pay',
      description:
        'Finalize agreements, including terms, conditions, and compensation details.',
    },
    {
      stepNumber: 4,
      title: 'Training',
      description:
        'Receive expert training in high-demand IT skills to enhance your professional profile.',
    },
    {
      stepNumber: 5,
      title: 'Mock Interview',
      description:
        'Practice with mock interviews to sharpen your skills and boost your confidence.',
    },
    {
      stepNumber: 6,
      title: 'Get Your Dream Job',
      description:
        'Secure your dream job in 45-60 days with our dedicated placement support.',
    },
  ];

  return (
    <section className='bg-white py-12'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-zinc-900'></h2>
        <Heading title='How Does It Work?' />
        <Paragraph data={'  Six Steps to get started with Data Skills Hub.'} />
      </div>

      {/* Card Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto'>
        {steps.map((step) => (
          <WorkCard
            count={step.stepNumber}
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
