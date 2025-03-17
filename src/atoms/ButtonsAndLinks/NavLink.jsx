import React from 'react';
import { Link } from 'react-router-dom';

import { useStates } from '../../zustand/states';

const NavLink = ({ title, url, baseUrl = null }) => {
  const { activeLink, setActiveLink } = useStates();
  const isDynamicRoute = baseUrl && url.includes(baseUrl);
  const effectiveUrl = isDynamicRoute ? baseUrl : url;
  const isActive = activeLink === effectiveUrl;

  const handleClick = () => {
    setActiveLink(effectiveUrl);
  };

  return (
    <Link
      to={url}
      onClick={handleClick}
      className={`font-open-sans text-sm px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-500 ${
        isActive
          ? 'text-white bg-zinc-800'
          : 'text-zinc-900 hover:text-white hover:bg-zinc-800'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {title}
    </Link>
  );
};

export default NavLink;
