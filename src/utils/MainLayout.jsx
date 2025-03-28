import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from '../organisms/Footer';
import NavBarWeb from '../organisms/NavBarWeb';

const MainLayout = () => {
  return (
    <main className='bg-[#FaFaFa] w-full min-h-screen'>
      <NavBarWeb />
      <div className='pt-20'>
        <Outlet />
      </div>
      <FooterComponent />
    </main>
  );
};

export default MainLayout;
