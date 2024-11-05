import { Box, Text, Button, VStack } from '@chakra-ui/react';

function Basketball() {
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
          Importance of a Basketball Profile
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-structured basketball profile is essential for catching the eye of college coaches and recruiters. It provides a detailed overview of your skills, achievements, and gameplay statistics.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          With a professionally crafted profile, you can showcase your commitment, skills, and potential, significantly enhancing your chances of securing a scholarship or a spot on a team.
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
          The Value of Highlight Reels
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Highlight reels play a critical role in showcasing your skills to recruiters. They offer a concise view of your athleticism, court awareness, and technical skills, allowing coaches to evaluate your potential.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-edited highlight video can significantly enhance your profile, helping you stand out as a talented player and providing a visual reference to complement your achievements.
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

export default Basketball;
