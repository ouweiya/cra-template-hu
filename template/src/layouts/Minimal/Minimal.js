import React, { useEffect, createElement as e } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';

const Minimal = ({ children }) => {
  // const { pathname } = useLocation();

  useEffect(() => {
    console.log('头部布局-2');
  }, []);
  return e('div', null, children);
};

export default Minimal;
