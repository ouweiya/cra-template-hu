import React, { useEffect, createElement as e } from 'react';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Link to='/'>home</Link>
      <h1 style={{ color: 'blue' }}>About</h1>
    </div>
  );
};

export default About;
