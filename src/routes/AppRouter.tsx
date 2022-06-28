import React, { ReactElement } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

// use React.lazy to apply code splitting
const Home = React.lazy(() => import('@containers/Home'));
const NotFound = React.lazy(() => import('@containers/ErrorPage/NotFound'));

interface IAppRoute {
  paths: string[],
  component: ReactElement,
}

export const routes: IAppRoute[] = [
  {
    paths: ['/', '/home'],
    component: <Home />
  },
  {
    paths: ['/not-found'],
    component: <NotFound />
  },
];

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => route.paths
          .map((path) => <Route path={path} key={path} element={route.component} />))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;