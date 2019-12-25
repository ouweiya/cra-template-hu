import React, { useEffect } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';

const Layouts = ({ children }) => {
  // const { pathname } = useLocation();

  useEffect(() => {
    console.log('头部布局-2');
  }, []);

  return <div>{children}</div>;
};

export default Layouts;
