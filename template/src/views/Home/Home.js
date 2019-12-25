import React, { useEffect, createElement as e } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  return e('div', null, e(Link, { to: `/about` }, 'about'), e('h1', null, 'Home'));
};

export default Home;
