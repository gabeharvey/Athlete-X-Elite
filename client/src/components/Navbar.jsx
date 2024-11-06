import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  IconButton,
  useDisclosure,
  Divider,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
import { useState, useEffect, useRef } from 'react';
import '../App.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const menuRef = useRef();
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    // Check if token exists in localStorage or session
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowCloseIcon(false), 200);
    } else {
      setShowCloseIcon(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: { opacity: 0, x: '100%' },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token from localStorage
    setIsLoggedIn(false); // Set isLoggedIn to false
    navigate('/'); // Redirect to home or login page
  };

  return (
    <Box
      bgColor="#2C2C2C"
      bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
      bgSize="5px 5px;"
      py="2.5rem"
      px="2rem"
      position="relative"
      boxShadow="lg"
      mb="10px"
      fontFamily="'Changa', cursive"
    >
      <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
        <Heading
          as={RouterLink}
          to="/"
          fontSize="2xl"
          fontFamily="'Tilt Prism', sans-serif"
          color="#FFFDD0"
          letterSpacing="wider"
        >
          Athlete X Elite
        </Heading>
        <Spacer />
        <IconButton
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          icon={
            showCloseIcon ? (
              <motion.div
                whileHover={{ scale: 1.2, color: 'rgba(255, 215, 0, 1)' }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                style={{ color: '#FFFDD0' }}
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.2, color: 'rgba(255, 215, 0, 1)' }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                style={{ color: '#FFFDD0' }}
              >
                <CgMenuGridO />
              </motion.div>
            )
          }
          display={['block', 'block', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled"
          fontSize="30px"
          _focus={{ boxShadow: 'none' }}
          mt="20px"
          mb="20px"
        />
        <Flex
          as="ul"
          display={['none', 'none', 'flex']}
          listStyleType="none"
          ml="auto"
          alignItems="center"
          gap="2rem"
          flex="1"
          justifyContent="space-evenly"
        >
          <Link as={RouterLink} to="/" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/elite" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }}>
            Elite
          </Link>
          {!isLoggedIn ? (
            <>
              <Link as={RouterLink} to="/login" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }}>
                Log In
              </Link>
              <Link as={RouterLink} to="/signup" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link as={RouterLink} to="/cart" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }}>
                Shopping Cart
              </Link>
              <Link as={RouterLink} to="/checkout" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }}>
                Checkout
              </Link>
              <Link as={RouterLink} to="/" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={handleLogout}>
                Log Out
              </Link>
            </>
          )}
        </Flex>

        {isOpen && (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={menuVariants}>
          <Box
            ref={menuRef}
            position="fixed"
            top="0"
            right="0"
            width="70%"
            height="100vh"
            bgColor="#2C2C2C"
            bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
            bgSize="5px 5px"
            zIndex="overlay"
            color="#FFFDD0"
            borderTopLeftRadius="30px"
            borderBottomLeftRadius="30px"
            boxShadow="0 0 20px rgba(0, 0, 0, 0.9)"
          >
            <motion.div variants={itemVariants}>
              <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                <Text fontSize="2xl" fontWeight="bold" color="#FFFDD0" ml="20px" mt="20px">
                  Menu
                </Text>
                <IconButton
                  aria-label="Close Menu"
                  icon={<CloseIcon boxSize="20px" stroke="#FFFDD0" strokeWidth="2px"/>}
                  variant="unstyled"
                  fontSize="24px" 
                  _focus={{ boxShadow: 'none' }}
                  color="#FFFDD0"
                  mt="18px"
                  mr="20px"
                  onClick={onClose}
                  _hover={{
                    transform: 'scale(1.1)', 
                  }}
                  _active={{
                    transform: 'scale(0.95)' 
                  }}
                />
              </Flex>
              <Divider borderColor="#FFFDD0" borderWidth="2px" opacity="1" />
              <Flex direction="column" alignItems="center" gap="2rem" mt="2rem">
                <Link
                  as={RouterLink}
                  to="/"
                  fontSize="lg"
                  color="#FFFDD0"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  onClick={onClose}
                  px="1rem" 
                  width="100%" 
                  textAlign="left" 
                >
                  Home
                </Link>
                <Link
                  as={RouterLink}
                  to="/elite"
                  fontSize="lg"
                  color="#FFFDD0"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  onClick={onClose}
                  px="1rem" 
                  width="100%"
                  textAlign="left"
                >
                  Elite
                </Link>
                {!isLoggedIn ? (
                  <>
                    <Link
                      as={RouterLink}
                      to="/login"
                      fontSize="lg"
                      color="#FFFDD0"
                      fontWeight="bold"
                      _hover={{ color: 'gold' }}
                      onClick={onClose}
                      px="1rem"
                      width="100%"
                      textAlign="left"
                    >
                      Log In
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/signup"
                      fontSize="lg"
                      color="#FFFDD0"
                      fontWeight="bold"
                      _hover={{ color: 'gold' }}
                      onClick={onClose}
                      px="1rem"
                      width="100%"
                      textAlign="left"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      as={RouterLink}
                      to="/cart"
                      fontSize="lg"
                      color="#FFFDD0"
                      fontWeight="bold"
                      _hover={{ color: 'gold' }}
                      onClick={onClose}
                      px="1rem"
                      width="100%"
                      textAlign="left"
                    >
                      Shopping Cart
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/checkout"
                      fontSize="lg"
                      color="#FFFDD0"
                      fontWeight="bold"
                      _hover={{ color: 'gold' }}
                      onClick={onClose}
                      px="1rem"
                      width="100%"
                      textAlign="left"
                    >
                      Checkout
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/"
                      fontSize="lg"
                      color="#FFFDD0"
                      fontWeight="bold"
                      _hover={{ color: 'gold' }}
                      onClick={handleLogout}
                      px="1rem"
                      width="100%"
                      textAlign="left"
                    >
                      Log Out
                    </Link>
                  </>
                )}
              </Flex>
            </motion.div>
          </Box>
        </motion.div>
      )}
      </Flex>
    </Box>
  );
};

export default Navbar;
