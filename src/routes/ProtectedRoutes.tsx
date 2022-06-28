import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { IAppRoute } from './AppRouter';

// use React.lazy to apply code splitting
const Home = React.lazy(() => import('@containers/HomePage'));

export const routes: IAppRoute[] = [
  {
    paths: ['/', '/home'],
    component: <Home />
  }
];


const ProtectedRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => route.paths
        .map((path) => <Route path={path} key={path} element={route.component} />))}
    </Routes>
  );
}

export default ProtectedRoutes;
