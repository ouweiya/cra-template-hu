import React, { useEffect, memo } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';

const Minimal = ({ children }) => {
  // const { pathname } = useLocation();

  useEffect(() => {}, []);
  return <div>{children}</div>;
};

export default memo(Minimal);
