import React, { createElement as e, Fragment as f } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'src/views/Home/Home';
import About from 'src/views/About/About';
import Contact from 'src/views/Contact/Contact';
import Contact1 from 'src/views/Contact1/Contact1';
import NotFound from 'src/views/404/NotFound';
import Layouts from 'src/layouts/Layouts';
import Layouts1 from 'src/layouts/Layouts1';
import One from 'src/views/One/One';
import Two from 'src/views/Two/Two';

const routes = [
  {
    exact: true,
    path: `/`,
    layout: Layouts,
    component: Home
  },
  {
    path: `/about`,
    layout: Layouts,
    component: About
  },
  {
    path: `/contact`,
    layout: Layouts,
    component: Contact,
    routes: [
      {
        path: `/contact/one`,
        component: One
      },
      {
        path: `/contact/two`,
        component: Two
      },
      {
        component: NotFound
      }
    ]
  },
  {
    layout: Layouts1,
    component: NotFound
  }
];

const RouteWithLayout = config => {
  const { layout: Layout, component: Component, routes, ...rest } = config;
  return e(Route, { ...rest, render: matchProps => e(Layout, null, e(Component, { ...matchProps, routes })) });
};

const Routes = () => e(Switch, null, ...routes.map(config => e(RouteWithLayout, config)));

export default Routes;

