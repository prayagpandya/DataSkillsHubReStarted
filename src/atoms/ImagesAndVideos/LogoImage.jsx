import React from 'react';

import { assets } from '../../utils/assets';

const LogoImage = ({ Class }) => {
  return (
    <img
      className={`bg-blend-color-burn ${Class}`}
      src={assets.logo}
      alt='logo'
    />
  );
};

export default LogoImage;
