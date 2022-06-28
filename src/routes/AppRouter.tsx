import React, { ReactElement } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
export interface IAppRoute {
  paths: string[],
  component: ReactElement,
}

const AuthChecker: React.FC = () => {
  const location = useLocation();
  const isLogin = false;
  // TODO implement function check login here and define protected + public routes
  if (isLogin) {
    return (
      <>
        <ProtectedRoutes />
      </>
    );
  }
  return (
    <>
      <PublicRoutes />
      {/* <Navigate to="/login" state={{ from: location }} replace /> */}
    </>
  );
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='*'
          element={ <AuthChecker />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;