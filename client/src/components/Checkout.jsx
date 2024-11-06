import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm'; 

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
        size="2xl"
        mb="1.5rem"
        fontFamily="'Changa', cursive"
        color="#FFFDD0"
        fontWeight="900"
        textAlign="center"
      >
        Checkout
      </Heading>
      <Text fontSize="lg" color="#FFFDD0" mb="2rem" fontFamily="'Changa', cursive">
        Please enter your payment details to complete your purchase.
      </Text>

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
      >
        Complete Purchase
      </Button>
    </Box>
  );
};

export default Checkout;
