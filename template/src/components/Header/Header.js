import React, { useEffect, memo, createElement as e } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header = () => {
  return e('div', { style: { background: '#31948b', height: 50 } });
};

export default memo(Header);
