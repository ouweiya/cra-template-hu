import React, { useEffect, createElement as e } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';
import Header from 'src/components/Header/Header';

const Main = ({ children }) => {
  // const { pathname } = useLocation();

  useEffect(() => {
    console.log('头部布局');
  }, []);

  return e('div', null, e(Header), children);
};

export default Main;
