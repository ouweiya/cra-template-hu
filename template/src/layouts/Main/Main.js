import React, { useEffect, memo } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';
import Header from 'src/components/Header/Header';

const Main = ({ children }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Main;
