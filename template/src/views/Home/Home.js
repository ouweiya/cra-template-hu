import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/about'>about</Link>
      <h1 style={{ color: 'green' }}>Home</h1>
    </div>
  );
};

export default Home;
