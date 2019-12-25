import React, { useEffect } from 'react';
import { Link, useLocation, Switch } from 'react-router-dom';

const Two = () => {
  useEffect(() => {
    console.log('Two');
  }, []);
  return <h1>Two</h1>;
};

const About = props => {
  return (
    <div>
      <Link to='/'>home</Link> <br />
      <Link to='/contact/one'>contact</Link>
      <h1>About</h1>
    </div>
  );
};

export default About;
