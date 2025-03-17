import React from 'react';

import PricingCard from '../molicules/PriceCard';

const PricingSection = () => {
  return (
    <section className='py-12 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-zinc-900 text-center mb-8'>
          Pricing Plans
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          <PricingCard
            plan='Starter'
            price={10}
            billingCycle='per month'
            billed='billed annually'
            features={[
              'Everything in Free',
              '5,000 events / month',
              'Unlimited seats',
            ]}
            buttonText='Choose Starter'
            buttonLink='/billing'
          />
          <PricingCard
            plan='Starter'
            price={10}
            billingCycle='per month'
            billed='billed annually'
            features={[
              'Everything in Free',
              '5,000 events / month',
              'Unlimited seats',
            ]}
            buttonText='Choose Starter'
            buttonLink='/billing'
          />
          <PricingCard
            plan='Starter'
            price={10}
            billingCycle='per month'
            billed='billed annually'
            features={[
              'Everything in Free',
              '5,000 events / month',
              'Unlimited seats',
            ]}
            buttonText='Choose Starter'
            buttonLink='/billing'
          />
          {/* Add more PricingCard components for other plans */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
