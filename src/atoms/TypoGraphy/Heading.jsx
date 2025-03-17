import React from 'react';

const Heading = ({ title, pos }) => {
  return (
    <h1
      className={`text-4xl font-semibold text-zinc-900 my-8 text-${
        pos ? pos : 'center'
      }`}
    >
      {title}
    </h1>
  );
};

export default Heading;
