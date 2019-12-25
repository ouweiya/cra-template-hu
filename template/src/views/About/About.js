import React, { useEffect, createElement as e } from 'react';
import { Link, useLocation, Switch } from 'react-router-dom';

const About = props => {
  return e(
    'div',
    null,
    e(Link, { to: `/` }, 'home', e('br')),
    e(Link, { to: `/contact/one` }, 'contact/one'),
    e('h1', null, 'About')
  );
};

export default About;
