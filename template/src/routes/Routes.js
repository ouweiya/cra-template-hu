import React, { createElement as e, Fragment as f } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'src/views/Home/Home';
import About from 'src/views/About/About';
import Contact from 'src/views/Contact/Contact';
import NotFound from 'src/views/404/NotFound';
import One from 'src/views/One/One';
import Two from 'src/views/Two/Two';
import MainLayout from 'src/layouts/Main/Main';
import MinimalLayout from 'src/layouts/Minimal/Minimal';

const routes = [
  {
    exact: true,
    path: `/`,
    layout: MainLayout,
    component: Home
  },
  {
    path: `/about`,
    layout: MainLayout,
    component: About
  },
  {
    path: `/contact`,
    layout: MainLayout,
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
    layout: MinimalLayout,
    component: NotFound
  }
];

const RouteWithLayout = config => {
  const { layout: Layout, component: Component, routes, ...rest } = config;
  return e(Route, { ...rest, render: matchProps => e(Layout, null, e(Component, { ...matchProps, routes })) });
};

const Routes = () => e(Switch, null, ...routes.map(config => e(RouteWithLayout, config)));

export default Routes;
