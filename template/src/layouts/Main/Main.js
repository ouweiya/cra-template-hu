import React, { useEffect, memo } from 'react';
import Topbar from './components/Topbar';

const Main = ({ children }) => {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
};

export default Main;
