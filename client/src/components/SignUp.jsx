import { useState, useContext } from 'react';
import { Box, Button, Input, VStack, Text, FormControl, FormLabel, Link, Alert, AlertIcon } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError(null); 
    setLoading(true); 

    try {
      const response = await axios.post(`${API_URL}/api/signup`, {
        username,
        email,
        password,
      });

      if (response.data.message === 'User created successfully') {
        // Changed to use username and password for login
        const loginResponse = await axios.post(`${API_URL}/api/login`, { username, password });
        if (loginResponse.data.success) {
          login(loginResponse.data.token);
          navigate('/'); 
        }
      } else {
        setError(response.data.message || 'Signup failed.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error signing up.');
    } finally {
      setLoading(false); 
    }
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
          mt={6}
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
          isLoading={loading} 
          loadingText="Creating..." 
        >
          Create Account
        </Button>

        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Already a member?{' '}
          <Link as={RouterLink} to="/login" color="#FFA500" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            Log In
          </Link>
        </Text>
      </Box>
    </VStack>
  );
}

export default SignUp;
