/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Image, VStack, Stack } from '@chakra-ui/react';

function Celeb() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bg="transparent"
      h="100vh"
      textAlign="center"
      mb="400px"
    >
      <Text fontSize="3xl" color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="center">
        Endorsed by and partnered with professional stars!
      </Text>

      <Stack
        spacing={10}
        align="center"
        justifyContent="center" 
        direction={{ base: 'column', md: 'row' }} 
        w="full"
      >
        {/* Celebrity Image */}
        <Image
          src="/wane-2.png"
          alt="Celebrity Endorsement"
          borderRadius="10px"
          boxSize="250px"
          objectFit="cover"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        />

        {/* Quote and Name */}
        <Box
          bgColor="#2C2C2C"
          bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
          bgSize="5px 5px"
          borderRadius="12px"
          p={6}
          w={{ base: "100%", md: "500px" }}
          textAlign="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Text fontSize="xl" fontStyle="italic" color="#FFFDD0" mb={4} fontFamily="'Changa', cursive">
            "Athlete X Elite truly understands how to highlight an athlete's journey. Their attention to specific skills and ability to showcase them gives college recruiters the information they need very quickly. This holds true for sports across the spectrum for young aspiring athletes."
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
            - Wane McGarity, University of Texas All-American, Dallas Cowboys and New Orleans Saints legend
          </Text>
        </Box>
      </Stack>
    </VStack>
  );
}

export default Celeb;
