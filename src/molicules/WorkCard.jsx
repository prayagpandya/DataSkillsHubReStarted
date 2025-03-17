import {
  Circle,
  Check,
  Square,
  CheckCircle2,
  User,
  Briefcase,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const WorkCard = ({ stepNumber, title, description }) => {
  // Dynamic icon selection based on step number
  const getIcon = (step) => {
    switch (step) {
      case 1:
        return <Circle className='text-zinc-600 w-20 h-20' />; // Initiation
      case 2:
        return <Check className='text-zinc-600 w-20 h-20' />; // Scheduling
      case 3:
        return <Square className='text-zinc-600 w-20 h-20' />; // Contracts & Pay
      case 4:
        return <CheckCircle2 className='text-zinc-600 w-20 h-20' />; // Training
      case 5:
        return <User className='text-zinc-600 w-20 h-20' />; // Mock Interview
      case 6:
        return <Briefcase className='text-zinc-600 w-20 h-20' />; // Get Your Dream Job
      default:
        return <Circle className='text-zinc-600 w-20 h-20' />;
    }
  };

  return (
    <div
      className='bg-gradient-to-br from-white to-zinc-50 rounded-xl p-6 mx-2 my-4 shadow-md border border-zinc-200 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:scale-105'
      role='article'
      aria-label={`${title} Step ${stepNumber}`}
    >
      {/* Step Badge */}
      <div className='absolute -top-5 -left-5 bg-zinc-800 rounded-full w-12 h-12 flex items-center justify-center border-2 border-white'>
        <span className='text-white font-bold text-xl drop-shadow-md'>
          {stepNumber}
        </span>
      </div>

      {/* Dynamic Icon */}
      <div className='flex items-center justify-center mb-8'>
        {getIcon(stepNumber)}
      </div>

      {/* Content Section */}
      <div className='flex-1 flex flex-col justify-center'>
        {/* Title */}
        <h3 className='text-2xl font-extrabold text-zinc-900 text-center mb-5 leading-snug tracking-wide drop-shadow-sm'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-lg text-zinc-600 text-center mb-8 leading-loose tracking-normal'>
          {description}
        </p>
      </div>

      {/* Learn More Button (Aligned at Bottom) */}
      <div className='text-center'>
        <Link
          to='/'
          className='inline-block px-6 py-3 bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc-800 font-semibold rounded-lg shadow-md hover:from-zinc-800 hover:to-zinc-900 hover:text-white border border-zinc-300 hover:border-zinc-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-50'
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
