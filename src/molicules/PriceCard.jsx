import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingCard = ({
  plan = 'Starter',
  price = 10,
  billingCycle = 'per month',
  billed = 'billed annually',
  features = ['Everything in Free', '5,000 events / month', 'Unlimited seats'],
  buttonText = 'Choose Starter',
  buttonLink = '/billing',
}) => {
  return (
    <div className='rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] border border-zinc-200 p-8'>
      <div className='flex flex-col h-full space-y-5'>
        {/* Plan Name */}
        <div className='flex justify-between flex-col'>
          <div className='text-xl md:text-2xl font-bold text-zinc-900 flex justify-between'>
            <span>{plan}</span>
          </div>

          {/* Price and Billing Info */}
          <div className='pt-5 text-zinc-500 font-medium text-base space-y-1'>
            <div className='flex items-center align-bottom'>
              <span className='pt-1.5'>$</span>
              <div className='ml-1 mr-2 text-2xl md:text-3xl font-bold text-zinc-900'>
                <span>{price}</span>
              </div>
              <span className='pt-1.5'>{billingCycle}</span>
            </div>
            <div className='text-base'>{billed}</div>
          </div>

          {/* Features List */}
          <ul className='space-y-2 pt-8'>
            {features.map((feature, index) => (
              <li
                key={index}
                className='flex items-center font-medium space-x-2 text-zinc-900'
              >
                <FaCheckCircle className='h-4 w-4 text-zinc-900' />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className='pt-2'>
          <Link
            to={buttonLink}
            className='inline-flex items-center space-x-2.5 bg-zinc-900 text-white py-4 px-5 rounded-2xl font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300'
            target='_blank'
            aria-label={`Choose ${plan} plan`}
          >
            <span className='w-full'>{buttonText}</span>
            <svg
              className='inline-block h-6 w-6'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 12.4999H21L14 19.4999M14 5.5L18 9.5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
