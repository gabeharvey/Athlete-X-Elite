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
  const [isRegistered, setIsRegistered] = useState(false);  // New state to track registration success
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form validation logic
  const validateForm = () => {
    const { username, email, password } = formData;

    // Check for empty fields
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return false;
    }

    // Check for valid email format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Check password length and complexity
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return false;
    }
    
    const passwordRegex = /^(?=.*[A-Za-z\d])[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must include at least one letter, one number, and one special character.');
      return false;
    }

    setError(null);
    return true;
  };

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Validate form data before submitting
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }
  
    try {
      console.log('Form Data:', formData); // Log form data being sent
      const response = await axios.post(`${API_URL}/api/signup`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Backend response:', response.data); // Log the response
  
      const { token, message, username } = response.data;
  
      // Check if the signup was successful
      if (message === 'User created successfully') {
        login(token); // Store token in AuthContext (or localStorage/sessionStorage)
        localStorage.setItem('username', username);
        resetFormData(); // Clear form fields
        setIsRegistered(true);  // Set registration success to true
  
        // Show success toast
        toast({
          title: 'Account created.',
          description: 'You have successfully signed up.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
  
        // Redirect user to home page
        console.log('Navigating to home page');
        navigate('/');
      } else {
        setError(message || 'Signup failed');
      }
    } catch (error) {
      console.log('Full error:', error); // Log full error for debugging
      const errorMessage =
        error.response?.data?.message || 'An error occurred during signup.';
      setError(errorMessage);
  
      // Show error toast
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };  

  // Reset form data
  const resetFormData = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
    });
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
          <Alert 
            status="error" 
            mt={4} 
            bg="#2C2C2C" 
            color="#FFFDD0" 
            borderRadius="8px" 
            boxShadow="0 0 10px rgba(0, 0, 0, 0.7)"
            border="1px solid #FFA500" 
            fontFamily="'Changa', cursive"
          >
            <AlertIcon color="#FFA500" /> 
            {error}
          </Alert>
        )}

        {isRegistered && (
          <Alert 
            status="success" 
            mt={4} 
            bg="#2C2C2C" 
            color="#FFFDD0" 
            borderRadius="8px" 
            boxShadow="0 0 10px rgba(0, 0, 0, 0.7)"
            border="1px solid #FFA500" 
          >
            <AlertIcon color="#FFA500" />
            User registered successfully!
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
          color="#FFFDD0"
          border="2px solid #FFA500"
          borderRadius="8px"
          padding="10px 20px"
          fontSize="18px"
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{
            backgroundColor: '#FFA500',
            color: '#2C2C2C',
            transform: 'scale(1.05)',
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Box>
  </Box>
);
}

export default SignUp;
