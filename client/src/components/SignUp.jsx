import { useState, useContext } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Text, Heading, Alert, AlertIcon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);  // Access the login function from AuthContext
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError('Please enter a valid email.');
      return;
    }

    const isValidPassword = password.length >= 8;
    if (!isValidPassword) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setError(null);

    try {
      // Send signup request
      const response = await axios.post(`${API_URL}/api/signup`, {
        username,
        email,
        password,
      });

      const { token, message } = response.data;

      if (message === 'User created successfully') {
        // Immediately log the user in by updating the context
        login(token);  // This will update the authentication state

        navigate('/'); // Redirect to the homepage or another protected route
      } else {
        setError(message || 'Signup failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="transparent"
      backgroundImage="url('/basketball.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      mt={20}
      mb="10rem"
    >
      <Heading as="h1" size="xl" mb="1rem" fontFamily="'Changa', cursive" color="#FFFDD0" fontWeight="bold">
        Create an Account
      </Heading>

      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px"
        borderRadius="12px"
        p={8}
        maxW="400px"
        mx="auto"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Sign Up
        </Text>

        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">Full Name</FormLabel>
          <Input
            fontFamily="'Changa', cursive"
            placeholder="Enter your full name"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500' }}
            bg="transparent"
            borderRadius="8px"
            p={4}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">Email</FormLabel>
          <Input
            fontFamily="'Changa', cursive"
            type="email"
            placeholder="Enter your email"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500' }}
            bg="transparent"
            borderRadius="8px"
            p={4}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mt={6}>
          <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">Password</FormLabel>
          <Input
            fontFamily="'Changa', cursive"
            type="password"
            placeholder="Enter your password"
            color="white"
            borderColor="#FFA500"
            _hover={{ borderColor: '#FFA500' }}
            _focus={{ borderColor: '#FFA500' }}
            bg="transparent"
            borderRadius="8px"
            p={4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          onClick={handleSignup}
        >
          Sign Up
        </Button>

        <Text mt={4} color="#FFFDD0">
          Already have an account?{' '}
          <Text
            as="span"
            cursor="pointer"
            color="#FFA500"
            fontFamily="'Changa', cursive"
            fontSize="15px"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => navigate('/login')}
          >
            Log In
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

export default SignUp;
