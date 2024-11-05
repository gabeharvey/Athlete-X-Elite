import { Box, Text, Button, VStack } from '@chakra-ui/react';

function Football() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/football.png')" 
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
          Building a Strong Football Profile
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-rounded football recruiting profile is key to catching the attention of college coaches. Highlight your position-specific skills, physical stats, and achievements to give coaches a complete picture of your potential.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Include game stats, academic achievements, and videos to demonstrate your dedication, athleticism, and commitment to the sport, increasing your chances of a scholarship or a spot on a college team.
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
          Importance of Highlight Reels
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          In football recruiting, highlight reels are essential for showcasing your best plays and athleticism. They allow coaches to see your game impact and skills in real game scenarios.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-edited highlight reel can emphasize your strengths, such as speed, agility, and game awareness, giving recruiters a clear view of your potential as a player.
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

export default Football;
