import { useState, useContext } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Text, Heading, Alert, AlertIcon, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, email, password } = formData;
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return false;
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError('Please enter a valid email.');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return false;
    }
    // Optional: Add a more complex password validation
    const passwordRegex = /^(?=.*[A-Za-z\d])[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must include at least one letter, one number, and one special character.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Form Data:', formData); // Check form data

    try {
      const response = await axios.post(`${API_URL}/api/signup`, formData);
      const { token, message } = response.data;

      if (message === 'User created successfully') {
        login(token);
        setFormData({
          username: '',
          email: '',
          password: ''
        });

        toast({
          title: 'Account created.',
          description: 'You have successfully signed up.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        navigate('/');
      } else {
        setError(message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.response?.data?.message || 'Error signing up');
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'An error occurred during signup.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
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
      <Heading as="h1" size="lg" mb="1rem" fontFamily="'Changa', cursive" color="#FFFDD0" fontWeight="bold">
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

        <form onSubmit={handleSignup}>
          <FormControl mt={6}>
            <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">Username</FormLabel>
            <Input
              fontFamily="'Changa', cursive"
              placeholder="Enter your username"
              color="white"
              borderColor="#FFA500"
              _hover={{ borderColor: '#FFA500' }}
              _focus={{ borderColor: '#FFA500' }}
              bg="transparent"
              borderRadius="8px"
              p={4}
              name="username"
              value={formData.username}
              onChange={handleInputChange}
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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <Button
            mt={8}
            fontFamily="'Tilt Prism', sans-serif"
            fontWeight="bold"
            bg="transparent"
            color="white"
            border="2px solid #FFA500"
            _hover={{
              backgroundColor: '#FFA500',
              color: 'black',
              borderColor: '#FFA500',
            }}
            width="100%"
            type="submit"
          >
            Sign Up
          </Button>
        </form>

        <Box mt={6}>
          <Text color="#FFFDD0" fontFamily="'Changa', cursive">
            Already have an account?{' '}
            <Button
              variant="link"
              color="#FFA500"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
