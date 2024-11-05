import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { AuthContext } from './AuthContext'; // Adjust the import based on your structure

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('authToken');
      console.log('Retrieved token:', token); 
      
      if (token) {
        try {
          const isValidTokenFormat = token.split('.').length === 3;
          if (!isValidTokenFormat) {
            throw new Error('Invalid token format');
          }

          console.log('Token before API call:', token);

          const apiUrl = import.meta.env.VITE_API_URL;
          const response = await fetch(`${apiUrl}/api/verify-token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.valid) {
              setIsAuthenticated(true);
              try {
                const decoded = jwtDecode(token);
                setUser(decoded);
              } catch (error) {
                console.error('Failed to decode token:', error.message);
                setIsAuthenticated(false);
                localStorage.removeItem('authToken');
              }
            } else {
              console.warn('Token is not valid according to server');
              setIsAuthenticated(false);
              localStorage.removeItem('authToken');
            }
          } else {
            throw new Error('Failed to verify token');
          }
        } catch (error) {
          console.error('Token verification failed:', error.message);
          setIsAuthenticated(false);
          localStorage.removeItem('authToken');
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  const login = (token) => {
    const isValidTokenFormat = token.split('.').length === 3;
    if (!isValidTokenFormat) {
      console.error('Invalid token format');
      return;
    }

    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error('Failed to decode token:', error.message);
      setIsAuthenticated(false);
      localStorage.removeItem('authToken');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
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
