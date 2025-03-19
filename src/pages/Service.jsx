import React from 'react';

import CommonHero from '../molicules/CommonHero';
import HeroBanner from '../molicules/ServiceBanner';
import ServicesSections from '../organisms/ServicesSections';

const Service = () => {
  return (
    <div>
      <CommonHero
        title={'Transforming Your Vision into Reality with Our Expert Services'}
        description={`We provide top-notch solutions tailored to your needs, combining
          innovation, expertise, and dedication. Let’s build something great
          together.`}
      />
      <ServicesSections />
    </div>
  );
};

export default Service;
