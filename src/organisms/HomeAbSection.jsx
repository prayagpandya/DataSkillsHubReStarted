import React from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import Paragraph from '../atoms/TypoGraphy/Paragraph';
import { assets } from '../utils/assets';

const Home4Section = () => {
  return (
    <div className='max-w-7xl mx-10'>
      <Heading
        title={'Empower Dreams and Secure Jobs in US & Canada Guaranteed!'}
      />
      <div className='flex flex-col lg:flex-row max-w-7xl mx-auto gap-6'>
        <video
          className='lg:w-1/2'
          loop
          autoPlay
          muted
          contextMenu='none'
          src={assets.homeAboutVideo}
        />
        <div>
          <Paragraph
            className={'my-3 text-lg'}
            data={
              'Welcome to Data Skills Hub, a leading provider of IT upskilling and staffing solutions. At Data Skills Hub, we specialize in empowering individuals with the skills and knowledge needed to thrive in the ever-evolving IT landscape. Our comprehensive upskilling programs are designed to equip professionals with the latest industry insights, ensuring they remain at the forefront of technological advancements.'
            }
          />
          <Paragraph
            className={'my-3 text-lg'}
            data={
              'In addition to our upskilling initiatives, Data Skills Hub offers cutting-edge staffing solutions, connecting skilled individuals with opportunities at top-tier companies. We take pride in fostering career growth and facilitating strategic talent placement. Join us on a transformative journey, where IT excellence meets unparalleled staffing solutions.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home4Section;
