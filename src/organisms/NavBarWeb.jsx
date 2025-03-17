import React from 'react';
import { IoCallOutline } from 'react-icons/io5';

import LogoImage from '../atoms/ImagesAndVideos/LogoImage';
import NavLinkGroup from '../molicules/NavLinkGroup';

const NavBarWeb = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-zinc-100 px-6 py-4    grid grid-cols-3 items-center'>
      <div className='flex flex-row ml-20'>
        <LogoImage Class='w-32 brightness-110 ' />
      </div>
      {/* <div className='flex flex-row justify-center'>
        <h1 className='text-zinc-900 font-semibold text-2xl'>
          Data Skills Hub
        </h1>
      </div> */}
      <div className='flex flex-row justify-end col-span-1'>
        <NavLinkGroup />
      </div>
      <div className='flex flex-row justify-end col-span-1'>
        <button className='px-8 py-3 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-100 cursor-pointer font-medium rounded-md bg-zinc-200 text-zinc-800 border border-zinc-800 transition-colors duration-200 flex items-center gap-2'>
          <IoCallOutline />
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavBarWeb;
