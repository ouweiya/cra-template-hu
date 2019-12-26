import React, { createElement as e } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from 'src/layouts/Main/Main';
import MinimalLayout from 'src/layouts/Minimal/Minimal';
import Home from 'src/views/Home/Home';
import About from 'src/views/About/About';
import NotFound from 'src/views/404/NotFound';

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
    component: About,
    routes: [
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
  const { layout: Layout, component: Component, routes, ...other } = config;

  return (
    <Route
      {...other}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} routes={routes} />
        </Layout>
      )}
    />
  );
};

const Routes = () => e(Switch, null, ...routes.map(config => <RouteWithLayout {...config} />));

export default Routes;
