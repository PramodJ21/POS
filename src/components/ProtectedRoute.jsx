// ProtectedRoute.jsx
import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ element: Element, rolesAllowed, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const token = localStorage.getItem('accessToken');
  
  useEffect(() => {
    const verifyUser = async () => {
      if (!token) {
        setIsAuthorized(false);
        setIsLoading(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const { UserInfo } = decodedToken;
        const roles = UserInfo.roles;

        // Fetch user verification from backend
        const response = await fetch('http://localhost:3500/verifyUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ username: UserInfo.username })
        });

        if (!response.ok) {
          // User not found or token invalid
          setIsAuthorized(false);
        } else {
          const hasRequiredRole = rolesAllowed.some(role => roles.includes(role));
          setIsAuthorized(hasRequiredRole);
        }
      } catch (error) {
        console.error('Error verifying user:', error);
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [token, rolesAllowed]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner/loader component
  }

  return isAuthorized ? <Element {...rest} /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
