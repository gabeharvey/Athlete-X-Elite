/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isValidTokenFormat = (token) => {
    try {
      const decoded = jwtDecode(token);
      // Check if token is expired
      return decoded.exp > Date.now() / 1000;
    } catch (error) {
      console.error('Invalid token format or decoding failed:', error.message);
      return false;
    }
  };

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates if the component unmounts
    
    const verifyToken = async () => {
      const token = localStorage.getItem('userToken');
      console.log('Retrieved token:', token); // Debugging line

      if (token && isValidTokenFormat(token)) {
        try {
          const apiUrl = import.meta.env.VITE_API_URL;
          const response = await fetch(`${apiUrl}/api/verify-token`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.valid && isMounted) {
              console.log('Token is valid, user authenticated');
              setIsAuthenticated(true);
              const decoded = jwtDecode(token);
              setUser(decoded);
            } else {
              console.log('Token is invalid or expired');
              if (isMounted) {
                setIsAuthenticated(false);
                setUser(null);
                localStorage.removeItem('userToken'); // Remove invalid token
              }
            }
          } else {
            console.error('Server error during token verification:', response.statusText);
            if (isMounted) {
              setIsAuthenticated(false);
              setUser(null);
              localStorage.removeItem('userToken'); // Remove invalid token
            }
          }
        } catch (error) {
          console.error('Token verification failed:', error.message);
          if (isMounted) {
            setIsAuthenticated(false);
            setUser(null);
            localStorage.removeItem('userToken'); // Remove invalid token
          }
        }
      } else {
        console.log('Token is missing or invalid format');
        if (isMounted) {
          setIsAuthenticated(false);
          setUser(null);
        }
      }

      if (isMounted) {
        setLoading(false); // Update loading state after checking the token
      }
    };

    verifyToken();

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array to run this effect only once

  const login = useCallback((token) => {
    if (!isValidTokenFormat(token)) {
      console.error('Invalid token format');
      return;
    }

    try {
      localStorage.setItem('userToken', token); // Store token in localStorage with the correct key
      const decoded = jwtDecode(token);
      console.log('Decoded token during login:', decoded); // Debugging line
      setUser(decoded);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Failed to decode token during login:', error.message);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('userToken'); // Remove invalid token
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>; // Add a styled spinner here
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
