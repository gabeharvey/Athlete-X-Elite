/* eslint-disable react/prop-types */
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, name, bio }) {
  const [flipped, setFlipped] = useState(false);

  const flipSound = new Audio('/card-flip.mp3');

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip} 
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            {name}
          </Text>
          <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive">
            Player Bio: {bio}
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
            Player Bio
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function Showcase() {
  return (
    <VStack spacing={8} align="center" justify="center" p={10} bgImage="url('/basketball.png')" bgSize="contain" bgPosition="center" bgRepeat="no-repeat" h="100vh" mb="400px">
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Changa', cursive">
        Click on Athlete
      </Text>
      <Card
        frontImg="../football-player.png" 
        name="John Smith"
        bio="John Smith is a rising star in football, known for his speed and agility on the field. He has averaged 200 yards rushing per game this season, leading his team to multiple victories."
      />
      <Card
        frontImg="../gym-athlete.png" 
        name="Jane Smith"
        bio="Jane Smith is a versatile player with excellent court vision and leadership skills. She is known for her ability to perform under pressure, making her a valuable asset to any team."
      />
    </VStack>
  );
}

export default Showcase;
