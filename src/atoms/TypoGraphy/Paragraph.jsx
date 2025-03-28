import React from 'react';

const Paragraph = ({ className, data }) => {
  return (
    <div className={`${className} text-zinc-900 font-poppins`}>{data}</div>
  );
};

export default Paragraph;
