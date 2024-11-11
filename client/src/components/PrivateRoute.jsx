/* eslint-disable react/prop-types */
// PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/login" />;
  }

  return children; // Render the child component (protected page) if logged in
};

export default PrivateRoute;
