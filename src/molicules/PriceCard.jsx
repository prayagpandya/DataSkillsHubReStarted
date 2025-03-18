import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingCard = ({
  plan = 'Basic',
  price = 15,
  // billingCycle = 'per month',
  billed = 'billed annually',
  features = [],
  buttonText = 'Get Started',
  buttonLink = '/billing',
  highlighted = false,
}) => {
  return (
    <div
      className={`rounded-3xl p-8 border border-zinc-200 transition-all duration-300 ${
        highlighted
          ? 'bg-white shadow-xl scale-105'
          : 'bg-[#FAFAFA] hover:shadow-lg'
      }`}
    >
      <div className='flex flex-col h-full space-y-6'>
        {/* Plan Name and Badge */}
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <span className='text-2xl font-bold text-zinc-900'>{plan}</span>
            {highlighted && (
              <span className='bg-zinc-900 text-white text-sm px-3 py-1 rounded-full'>
                Most Popular
              </span>
            )}
          </div>

          {/* Price and Billing Info */}
          <div className='text-zinc-500 font-medium space-y-1'>
            <div className='flex items-baseline'>
              <span className='text-4xl font-bold text-zinc-900 mr-2'>
                ${price}
              </span>
              {/* <span className='text-base'>{billingCycle}</span> */}
            </div>
            <div className='text-sm text-zinc-400'>{billed}</div>
          </div>
        </div>

        {/* Features List */}
        <ul className='space-y-3 flex-1'>
          {features.map((feature, index) => (
            <li
              key={index}
              className='flex items-center space-x-3 text-zinc-700'
            >
              <FaCheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
              <span className='text-base'>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link
          to={buttonLink}
          className={`w-full text-center py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 ${
            highlighted
              ? 'bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-xl'
              : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
          }`}
          target='_blank'
          aria-label={`Choose ${plan} plan`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
