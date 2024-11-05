import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:5000/api/payment', {
          amount: 1000, 
          id,
        });

        if (response.data.success) {
          setSuccess(true);
        } else {
          setErrorMessage('Payment failed. Please try again.');
        }
      } catch (error) {
        console.error('Payment Error: ', error.response ? error.response.data : error.message);
        setErrorMessage(error.response ? error.response.data.message : 'Payment error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Stripe Error: ', error.message);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxW="500px"
      mx="auto"
      bgColor="#2C2C2C"
      bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
      bgSize="5px 5px"
      borderRadius="12px"
      boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
      p={8}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: 'translateY(-10px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
      }}
    >
      {!success ? (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '18px',
                  color: '#FFFDD0',
                  '::placeholder': { color: '#BFBFBF' },
                },
                invalid: {
                  color: '#FF6347',
                },
              },
            }}
          />
          <Button
            type="submit"
            disabled={!stripe || loading}
            bg="transparent"
            color="#FFFDD0"
            border="2px solid #FFA500"
            borderRadius="8px"
            padding="10px 20px"
            fontSize="18px"
            fontFamily="'Tilt Prism', sans-serif"
            fontWeight="bold"
            cursor="pointer"
            mt={6}
            width="100%"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            _hover={{
              bg: '#FFA500',
              color: 'white',
              transform: 'scale(1.05)',
            }}
            _active={{
              bg: '#FF8C00',
            }}
          >
            {loading ? 'Processing...' : 'Pay'}
          </Button>
          {errorMessage && <Text color="red" mt={4}>{errorMessage}</Text>}
        </form>
      ) : (
        <Text fontSize="2xl" fontWeight="bold" color="green.500">
          Payment Successful!
        </Text>
      )}
    </Box>
  );
};

export default PaymentForm;
