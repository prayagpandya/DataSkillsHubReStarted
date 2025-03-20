// Heading.jsx (updated)
import React from 'react';

const Heading = ({ title, className = '' }) => {
  return (
    <h1
      className={`text-zinc-900 my-6 sm:my-8 text-center  font-poppins  font-semibold text-2xl md:text-4xl ${className}`}
    >
      {title}
    </h1>
  );
};

export default Heading;
