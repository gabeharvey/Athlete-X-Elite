import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  IconButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Add axios for API requests
import '../App.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // Check if the token exists in localStorage (looking for 'authToken')
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate the token with your backend API
      axios
        .get('/api/protected', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.valid) {
            setIsLoggedIn(true); // Token is valid, user is logged in
          } else {
            setIsLoggedIn(false); // Token is invalid, user is not logged in
          }
        })
        .catch(() => {
          setIsLoggedIn(false); // In case of error (e.g., network issues), set user as logged out
        });
    } else {
      setIsLoggedIn(false); // No token, set as logged out
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

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to the homepage after logout
  };

  return (
    <Box
      bgColor="#2C2C2C"
      bgImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
      bgSize="5px 5px"
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
              <Link as={RouterLink} to="/shoppingcart" fontSize="md" color="#FFFDD0" fontWeight="bold" _hover={{ transform: 'scale(1.05)', color: 'gold' }}>
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
              p="3rem"
            >
              <motion.div variants={itemVariants}>
                <Heading as="h3" size="lg" textAlign="center" color="#FFFDD0">
                  Menu
                </Heading>
                <Divider my="1rem" borderColor="#FFFDD0" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link as={RouterLink} to="/" display="block" fontSize="md" color="#FFFDD0" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={onClose}>
                  Home
                </Link>
                <Link as={RouterLink} to="/elite" display="block" fontSize="md" color="#FFFDD0" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={onClose}>
                  Elite
                </Link>
                {!isLoggedIn ? (
                  <>
                    <Link as={RouterLink} to="/login" display="block" fontSize="md" color="#FFFDD0" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={onClose}>
                      Log In
                    </Link>
                    <Link as={RouterLink} to="/signup" display="block" fontSize="md" color="#FFFDD0" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={onClose}>
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <Link as={RouterLink} to="/shoppingcart" display="block" fontSize="md" color="#FFFDD0" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={onClose}>
                      Shopping Cart
                    </Link>
                    <Link as={RouterLink} to="/checkout" display="block" fontSize="md" color="#FFFDD0" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={onClose}>
                      Checkout
                    </Link>
                    <Link as={RouterLink} to="/" display="block" fontSize="md" color="#FFFDD0" _hover={{ transform: 'scale(1.05)', color: 'gold' }} onClick={() => { handleLogout(); onClose(); }}>
                      Log Out
                    </Link>
                  </>
                )}
              </motion.div>
            </Box>
          </motion.div>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
