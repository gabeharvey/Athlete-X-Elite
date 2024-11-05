import { Box, Text, Button, VStack } from '@chakra-ui/react';

function Golf() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/golf.png')" 
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
          Crafting Your Golf Recruiting Profile
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A solid golf recruiting profile is vital for attracting attention from college coaches. Highlight your scoring average, tournament finishes, and unique skills to make your profile stand out.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Showcasing your dedication, training regimen, and tournament participation can significantly enhance your visibility in the recruiting process.
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
          The Value of Highlight Videos
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          Highlight videos are essential for showcasing your golfing skills and abilities. They provide a visual representation of your game, including your swing mechanics and course management.
        </Text>
        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
          A well-produced highlight reel can effectively showcase your strengths, setting you apart from other recruits and attracting the attention of coaches.
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

export default Golf;
