import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ title, url, baseUrl = null }) => {
  const location = useLocation();

  const isDynamicRoute = baseUrl && url.includes(baseUrl);
  console.log('Baseurl:', baseUrl, url.includes(baseUrl));

  const effectiveUrl = isDynamicRoute ? baseUrl : url;
  const isActive =
    location.pathname === url ||
    (isDynamicRoute && location.pathname.startsWith(effectiveUrl));

  return (
    <Link
      to={url}
      className={`font-open-sans text-sm px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-500 w-full text-center ${
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
