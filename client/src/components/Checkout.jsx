import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { Link } from 'react-router-dom';

// Stripe Info
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bgImage="url('/shopping-bag.png')" 
      bgSize="contain"
      bgPosition="center top"
      bgRepeat="no-repeat"
      h="100vh"
      mb="400px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        size="xl"
        mb="1.5rem"
        fontFamily="'Changa', cursive"
        color="#FFFDD0"
        fontWeight="900"
        textAlign="center"
      >
        Checkout
      </Heading>
      <Text fontSize="lg" color="#FFFDD0" mb="2rem" fontFamily="'Changa', cursive">
        Please review your order and enter payment details to complete your purchase.
      </Text>

      {/* Order Summary Box */}
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px"
        borderRadius="12px"
        p={6}
        w="350px"
        mb="2rem"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Heading as="h3" size="md" color="#FFFDD0" mb={4} fontFamily="'Changa', cursive">
          Order Summary
        </Heading>
        <Text fontSize="md" color="#FFFDD0" fontFamily="'Changa', cursive">
          Product 1: $29.99
        </Text>
        <Text fontSize="md" color="#FFFDD0" fontFamily="'Changa', cursive">
          Product 2: $49.99
        </Text>
        <Text fontSize="lg" color="#FFA500" fontWeight="bold" mt={4} fontFamily="'Changa', cursive">
          Total: $79.98
        </Text>
      </Box>

      {/* Payment Form Box */}
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px"
        borderRadius="12px"
        p={8}
        w="350px"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Heading as="h3" size="md" color="#FFFDD0" mb={4} fontFamily="'Changa', cursive">
          Payment Details
        </Heading>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </Box>

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
        as={Link} 
        to="/shoppingcart" 
      >
        Return to Shopping Cart
      </Button>
    </Box>
  );
};

export default Checkout;
