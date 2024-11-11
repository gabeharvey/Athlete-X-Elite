import { Box, Text, Button, VStack, Input, FormControl, FormLabel, Link, Spinner } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true); // Set loading to true while making the request
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email: username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.token) {
        // Store the token in localStorage or sessionStorage based on your preference
        localStorage.setItem('userToken', response.data.token);
        console.log("Storing username:", username);
        localStorage.setItem('username', username);
        navigate(from);  // Redirect to the home page
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error response
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'An error occurred. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false); // Reset loading state after request
    }
    navigate(from);
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="100vh"
    >
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px"
        borderRadius="12px"
        p={8}
        w="300px"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Log In
        </Text>
        {error && (
          <Text color="red.500" fontSize="sm" mt={2}>
            {error}
          </Text>
        )}

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
            Email
          </FormLabel>
          <Input
            fontFamily="'Changa', cursive"
            type="text"
            placeholder="Enter your username"
            bg="transparent"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
            borderRadius="8px"
            p={4}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
            Password
          </FormLabel>
          <Input
            fontFamily="'Changa', cursive"
            type="password"
            placeholder="Enter your password"
            bg="transparent"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
            borderRadius="8px"
            p={4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button
          mt={8}
          fontFamily="'Tilt Prism', sans-serif"
          fontWeight="bold"
          bg="transparent"
          color="#FFFDD0"
          border="2px solid #FFA500"
          borderRadius="8px"
          padding="10px 20px"
          fontSize="18px"
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{
            bg: '#FFA500',
            color: 'white',
            transform: 'scale(1.05)',
          }}
          onClick={handleLogin}
          isLoading={loading} // Add a loading state to the button
        >
          {loading ? <Spinner color="white" /> : 'Log In'}
        </Button>

        <Text mt={6} color="#FFFDD0" fontFamily="'Changa', cursive">
          New to <span className="login-logo">Athlete X Elite</span>?{' '}
          <Link
            as={RouterLink}
            to="/signup"
            color="#FFA500"
            fontWeight="bold"
            fontFamily="'Changa', cursive"
            _hover={{ textDecoration: 'underline' }}
          >
            Sign Up
          </Link>
        </Text>
      </Box>
    </VStack>
  );
}

export default LogIn;
