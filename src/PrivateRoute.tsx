import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

interface PrivateRouteProps {
  element: React.ReactElement;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;