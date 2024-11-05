import { useState } from 'react';
import { Box, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa'; 

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Athlete X Monthly Subscription", price: 49.99, image: "/athlete-x-logo.png" },
    { id: 2, name: "Athlete X Annual Subscription", price: 499.99, image: "/athlete-x-logo.png" },
    { id: 3, name: "Standalone Spotlight Package", price: 399.99, image: "/athlete-x-logo.png" },
    { id: 4, name: "Standalone Feature Package", price: 599.99, image: "/athlete-x-logo.png" },
    { id: 5, name: "Standalone Showcase Package", price: 799.99, image: "/athlete-x-logo.png" },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
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
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      mt={20}
    >
      <Heading
        as="h1"
        size="xl"
        mb="1rem"
        fontFamily="'Changa', cursive"
        color="#FFFDD0" 
        fontWeight="900"
      >
        Your Shopping Cart
      </Heading>

      <Stack direction="column" spacing={8} align="center" mt={8}>
        {cartItems.map(item => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgColor="#2C2C2C"
            borderRadius="12px"
            p={4}
            w="99%"
            textAlign="center"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: 'translateY(-10px)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              borderRadius="12px"
              objectFit="cover"
              width="100px"
              height="150px"
            />
            <Text fontSize="xl" fontWeight="bold" color="#FFFDD0" ml={4}>
              {item.name}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="#FFA500">
              ${item.price.toFixed(2)}
            </Text>
            <Button
              onClick={() => removeItem(item.id)}
              bg="transparent"
              color="#FFFDD0"
              border="2px solid #FFA500"
              borderRadius="8px"
              padding="10px 20px"
              _hover={{
                bg: '#FFA500',
                color: 'white',
                transform: 'scale(1.05)',
              }}
              ml={4}
            >
              <FaTrashAlt size="20px" />
            </Button>
          </Box>
        ))}
      </Stack>

      <Box mt={12}>
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0">
          Total Price: ${totalPrice.toFixed(2)}
        </Text>
        <Link to="/checkout">
          <Button
            bg="transparent"
            color="#FFFDD0"
            border="2px solid #FFA500"
            borderRadius="8px"
            padding="10px 20px"
            fontSize="18px"
            cursor="pointer"
            mt={6}
            _hover={{
              bg: '#FFA500',
              color: 'white',
              transform: 'scale(1.05)',
            }}
            boxShadow="lg"
            fontFamily="'Tilt Prism', sans-serif"
          >
            Proceed to Checkout
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
