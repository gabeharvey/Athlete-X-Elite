import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { AuthContext } from './AuthContext'; 

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isValidTokenFormat = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp > Date.now() / 1000; 
    } catch (error) {
      console.error('Invalid token format or decoding failed:', error.message);
      return false;
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('authToken');
      console.log('Retrieved token:', token);

      if (token) {
        const isValid = isValidTokenFormat(token);
        if (isValid) {
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
              if (data && data.valid) { 
                setIsAuthenticated(true);
                const decoded = jwtDecode(token);
                setUser(decoded);
              } else {
                console.warn('Token is invalid according to the server');
                setIsAuthenticated(false);
                localStorage.removeItem('authToken');
              }
            } else {
              console.error('Server error during token verification:', response.statusText);
              throw new Error('Failed to verify token with the server');
            }
          } catch (error) {
            console.error('Token verification failed:', error.message);
            setIsAuthenticated(false);
            localStorage.removeItem('authToken');
          }
        } else {
          console.warn('Invalid token format');
          setIsAuthenticated(false);
          localStorage.removeItem('authToken');
        }
      } else {
        setIsAuthenticated(false);
      }

      setLoading(false);
    };

    verifyToken();

    return () => setLoading(false);
  }, []);

  const login = (token) => {
    if (!isValidTokenFormat(token)) {
      console.error('Invalid token format');
      return;
    }

    try {
      localStorage.setItem('authToken', token);
      const decoded = jwtDecode(token);
      setUser(decoded);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Failed to decode token during login:', error.message);
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
