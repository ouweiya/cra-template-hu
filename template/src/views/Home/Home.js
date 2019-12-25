import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/about'>about</Link>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
