import React from 'react';

import MenuNav from './MenuNav';
import MenuAuth from './MenuAuth';

const Header = () => {
  return (
    <div>
      <MenuNav />
      <MenuAuth />
    </div>
  );
};

export default Header;
