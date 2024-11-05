import { Box, Text, VStack } from '@chakra-ui/react';

function PrivacyPolicy() {
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
    >
      <Box
        bgColor="#2C2C2C"
        bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        borderRadius="12px"
        p={[5, 8]} 
        w={["90%", "90%", "600px"]} 
        maxW="600px" 
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
        }}
      >
        <Text fontSize={["xl", "2xl"]} fontWeight="bold" color="#FFFDD0" fontFamily="'Changa', cursive">
          Privacy Policy
        </Text>

        <Text mt={6} color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="left" fontSize={["sm", "md"]}>
          At Athlete X, your privacy is of utmost importance. This Privacy Policy explains how we collect, use, and safeguard your personal information.
        </Text>

        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="left" fontSize={["sm", "md"]}>
          <strong>1. Information We Collect:</strong> We collect personal data such as your name, email, and login credentials when you sign up for an account. This information is used solely to enhance your experience on our platform.
        </Text>

        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="left" fontSize={["sm", "md"]}>
          <strong>2. How We Use Your Information:</strong> Your data is used to create and manage your account, provide customer support, and notify you about updates.
        </Text>

        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="left" fontSize={["sm", "md"]}>
          <strong>3. Security:</strong> We take appropriate security measures to protect your data from unauthorized access. However, no method of transmission over the internet is 100% secure.
        </Text>

        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="left" fontSize={["sm", "md"]}>
          <strong>4. Changes to This Policy:</strong> We may update this policy from time to time. We encourage you to review it periodically.
        </Text>

        <Text mt={4} color="#FFFDD0" fontFamily="'Changa', cursive" textAlign="left" fontSize={["sm", "md"]}>
          <strong>5. Contact Us:</strong> If you have any questions about this policy, please reach out to us at gabe@athletexelite.com.
        </Text>
      </Box>
    </VStack>
  );
}

export default PrivacyPolicy;
