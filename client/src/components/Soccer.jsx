import { Box, Text, Button, VStack } from '@chakra-ui/react';

function Soccer() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/soccer.png')" 
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
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Importance of a Soccer Profile
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-crafted soccer profile is crucial for attracting the attention of college coaches and recruiters. It provides a comprehensive overview of your skills, game statistics, and accomplishments.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          With a professional profile, you can effectively showcase your dedication, teamwork, and performance on the field, increasing your chances of earning a scholarship or a spot on a team.
        </Text>
      </Box>
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
        <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          The Role of Game Highlights
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Highlight reels are vital for showcasing your skills and playing style to recruiters. They allow coaches to see your game awareness, technical ability, and how you perform under pressure.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-produced video can effectively illustrate your strengths on the field, positioning you as a standout player and providing valuable insights into your potential.
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

export default Soccer;
