import React, { useState, useEffect, useRef } from 'react';
import { IoCallOutline, IoMenu, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import LogoImage from '../atoms/ImagesAndVideos/LogoImage';
import NavLinkGroup from '../molicules/NavLinkGroup';
import { useStates } from '../zustand/states';
import Modal from './Modal';

const NavBarWeb = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { setActiveLink } = useStates();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-zinc-100 px-4 py-4'>
      <div
        ref={menuRef}
        className='max-w-7xl mx-auto flex items-center justify-between'
      >
        <div className='flex items-center'>
          <Link to={'/'} onClick={() => setActiveLink('/')}>
            <LogoImage className='brightness-110' />
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-6'>
          <NavLinkGroup />
          <button
            onClick={openModal}
            className='px-6 py-2 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-100 font-medium rounded-md bg-zinc-200 text-zinc-800 border border-zinc-800 transition-colors duration-200 flex items-center gap-2'
          >
            <IoCallOutline />
            Contact Us
          </button>
        </div>

        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-zinc-800 hover:text-zinc-600 focus:outline-none'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-zinc-100 mt-4 pb-4 border-t border-zinc-200 md:hidden'>
            <div className='flex flex-col gap-4 px-4'>
              <NavLinkGroup isMobile={true} />
              <button
                onClick={openModal}
                className='px-6 py-2 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-100 font-medium rounded-md bg-zinc-200 text-zinc-800 border border-zinc-800 transition-colors duration-200 flex items-center gap-2 w-full justify-center'
              >
                <IoCallOutline />
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        context={'Contact Us'}
        source={'Contact Us'}
        isJobPage={false}
        key={'Contact Us'}
      />
    </nav>
  );
};

export default NavBarWeb;
