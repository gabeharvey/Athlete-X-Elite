import { useState } from 'react';
import { Box, Text, Button, Input, Textarea, FormControl, FormLabel, VStack, useToast } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_chnxs9o';
    const templateID = 'template_9lth3qc';
    const userID = 'OsmvrvTNk66UEd-sC'; 
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: 'Message sent successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        toast({
          title: 'Message failed to send.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={[5, 10]}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="100vh"
      mb="200px"
    >
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        borderRadius="12px"
        p={[5, 8]}
        w={["90%", "90%", "400px"]}
        maxW="400px"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Text fontSize={["xl", "2xl"]} fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Contact Us
        </Text>

        <form onSubmit={handleSubmit}>
          <FormControl mt={6}>
            <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
              Name
            </FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              fontFamily="'Changa', cursive"
              type="text"
              placeholder="Enter your name"
              bg="transparent"
              color="white"
              borderColor="#FFA500"
              _hover={{ borderColor: '#FFA500' }}
              _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
              borderRadius="8px"
              p={4}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
              Email
            </FormLabel>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              fontFamily="'Changa', cursive"
              type="email"
              placeholder="Enter your email"
              bg="transparent"
              color="white"
              borderColor="#FFA500"
              _hover={{ borderColor: '#FFA500' }}
              _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
              borderRadius="8px"
              p={4}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel color="#FFFDD0" fontFamily="'Changa', cursive">
              Message
            </FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              fontFamily="'Changa', cursive"
              placeholder="Enter your message"
              bg="transparent"
              color="white"
              borderColor="#FFA500"
              _hover={{ borderColor: '#FFA500' }}
              _focus={{ borderColor: '#FFA500', boxShadow: '0 0 5px #FFA500' }}
              borderRadius="8px"
              p={4}
            />
          </FormControl>

          <Button
            type="submit"
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
          >
            Send Message
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default Contact;
