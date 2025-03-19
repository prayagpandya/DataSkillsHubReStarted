import React from 'react';

import CommonHero from '../molicules/CommonHero';
import JobsHero from '../organisms/JobsHero';
import JobsSection from '../organisms/JobsSection';

const Jobs = () => {
  return (
    <div>
      <CommonHero
        title={' Launch Your Dream Career'}
        description={`Discover opportunities that align with your skills and shape
          tomorrow’s world.`}
      />
      <JobsSection />
    </div>
  );
};

export default Jobs;
