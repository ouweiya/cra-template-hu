import React, { useEffect, createElement as e } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Contact = ({ routes, ...rest }) => {
  const { pathname } = rest.location;

  return e(
    'div',
    null,
    e('h1', null, 'Contact'),
    e(Link, { to: '/' }, 'home', e('br')),
    e(Link, { to: '/contact' }, 'contact', e('br')),
    e(Link, { to: '/contact/one' }, 'one', e('br')),
    e(Link, { to: '/contact/two' }, 'two', e('br')),
    e(Link, { to: '/contact/three' }, 'three'),
    pathname !== '/contact' &&
      e(Switch, null, ...routes.map(route => e(Route, { component: route.component, path: route.path })))
  );
};

export default Contact;
