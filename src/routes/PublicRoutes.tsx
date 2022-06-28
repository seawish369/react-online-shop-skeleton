import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { IAppRoute } from './AppRouter';

// use React.lazy to apply code splitting
const HomePage = React.lazy(() => import('@containers/HomePage'));
const NotFoundPage = React.lazy(() => import('@containers/ErrorPage/NotFoundPage'));


export const routes: IAppRoute[] = [
  {
    paths: ['/', '/home'],
    component: <HomePage />
  },
  {
    paths: ['/*'],
    component: <NotFoundPage />
  },
];



const PublicRoutes: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-auto">
        <Routes>
          {routes.map((route) => route.paths
            .map((path) => <Route path={path} key={path} element={route.component} />))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default PublicRoutes;
