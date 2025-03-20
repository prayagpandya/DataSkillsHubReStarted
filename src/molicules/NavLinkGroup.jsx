// NavLinkGroup.jsx
import React from 'react';

import NavLink from '../atoms/ButtonsAndLinks/NavLink';

const NavLinkGroup = ({ isMobile = false }) => {
  return (
    <div
      className={`flex ${
        isMobile ? 'flex-col' : 'flex-row'
      } gap-2 items-center`}
    >
      <NavLink title='Home' url='/' />
      <NavLink title='Courses' url='/courses' />
      <NavLink title='About' url='/about' />
      <NavLink title='Services' url='/service' />
      <NavLink title='Jobs' url='/jobs' />
    </div>
  );
};

export default NavLinkGroup;
