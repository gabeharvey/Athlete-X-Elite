import { Box, Text, Button, VStack } from '@chakra-ui/react';

function Hockey() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/hockey.png')" 
      bgSize="contain" 
      bgPosition="center" 
      bgRepeat="no-repeat" 
      h="100vh" 
      mb="200px"
      mt="200px"
    >
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
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
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Crafting a Winning Hockey Profile
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A standout hockey profile is key to catching the eye of recruiters. Highlight your position, stats, and on-ice performance to demonstrate your skills.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-presented profile can effectively showcase your dedication and teamwork, enhancing your recruitment prospects.
        </Text>
      </Box>
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
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
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          The Value of Game Highlights
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Game highlights are essential for showcasing your skills in hockey. They provide a visual summary of your gameplay, techniques, and strategic plays.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-edited highlight reel can effectively illustrate your strengths, making you a standout candidate for recruitment.
        </Text>
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
          Learn More
        </Button>
      </Box>
    </VStack>
  );
}

export default Hockey;
