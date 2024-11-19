import React, { FC, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { checkAuthStatus } from '../../services/slices/user';

interface ProtectedRouteProps {
  children: React.ReactNode;
  onlyUnAuth?: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  onlyUnAuth
}) => {
  const isAuthorized = useSelector((state: any) => state.user.isAuthorized);
  const location = useLocation();

  if (onlyUnAuth && isAuthorized) {
    return <Navigate to={location.state?.from?.pathname || '/'} />;
  }

  if (!isAuthorized && !onlyUnAuth) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return <>{children}</>;
};
