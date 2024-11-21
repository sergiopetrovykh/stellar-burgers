/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthorizedSelector, getRequestUser } from '@slices';
import { Preloader } from '@ui';

interface ProtectedRouteProps {
  children: React.ReactNode;
  onlyUnAuth?: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  onlyUnAuth
}) => {
  const isAuthorized = useSelector(isAuthorizedSelector); // Проверяем авторизацию
  const isUserLoading = useSelector(getRequestUser); // Проверяем состояние загрузки пользователя
  const location = useLocation();

  // Если данные пользователя ещё загружаются, отображаем прелоадер
  if (isUserLoading) {
    return <Preloader />;
  }

  if (onlyUnAuth && isAuthorized) {
    return <Navigate to={location.state?.from?.pathname || '/'} />;
  }

  if (!isAuthorized && !onlyUnAuth) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return <>{children}</>;
};
