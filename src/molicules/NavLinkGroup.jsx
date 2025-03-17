import React from 'react';

import NavLink from '../atoms/ButtonsAndLinks/NavLink';

const NavLinkGroup = () => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <NavLink title='Home' url='/' />
      <NavLink title='Courses' url='/courses' />
      <NavLink title='About' url='/about' />
      <NavLink title='Services' url='/service' />

      <NavLink title='Jobs' url='/jobs' />
    </div>
  );
};

export default NavLinkGroup;
