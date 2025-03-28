import React from 'react';

const StatCard = ({ title, Icon }) => {
  return (
    <div className='flex flex-col items-center justify-center bg-zinc-200 rounded-lg shadow-md p-6 w-72 h-40 border border-gray-200 hover:shadow-lg gap-y-6 transition-shadow duration-300'>
      <div className='text-yellow-600'>
        {React.cloneElement(Icon, { className: 'w-12 h-12' })}
      </div>
      <p className='text-center text-gray-800 font-medium text-lg  font-open-sans'>
        {title}
      </p>
    </div>
  );
};

export default StatCard;
