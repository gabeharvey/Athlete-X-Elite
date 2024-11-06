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
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
import { useState, useEffect, useRef, useContext } from 'react'; 
import { AuthContext } from '../context/AuthContext'; 
import '../App.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const menuRef = useRef();

  const { isAuthenticated, logout } = useContext(AuthContext);

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
      maxWidth="100%" 
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
          <Link
            as={RouterLink}
            to="/"
            fontSize="md"
            color="#FFFDD0"
            fontWeight="bold"
            position="relative"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-0.2rem',
              left: 0,
              width: 0,
              height: '2px',
              bg: '#FFFDD0',
              transition: 'width 0.3s ease',
            }}
          >
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                as={RouterLink}
                to="/elite"
                fontSize="md"
                color="#FFFDD0"
                fontWeight="bold"
                position="relative"
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: '#FFFDD0',
                  transition: 'width 0.3s ease',
                }}
              >
                Elite
              </Link>
              <Link
                as={RouterLink}
                to="/cart"
                fontSize="md"
                color="#FFFDD0"
                fontWeight="bold"
                position="relative"
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: '#FFFDD0',
                  transition: 'width 0.3s ease',
                }}
              >
                Shopping Cart
              </Link>
              <Link
                as={RouterLink}
                to="/checkout"
                fontSize="md"
                color="#FFFDD0"
                fontWeight="bold"
                position="relative"
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: '#FFFDD0',
                  transition: 'width 0.3s ease',
                }}
              >
                Checkout
              </Link>
              <Link
                as={RouterLink}
                to="/"
                fontSize="md"
                color="#FFFDD0"
                fontWeight="bold"
                position="relative"
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
                onClick={logout}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: '#FFFDD0',
                  transition: 'width 0.3s ease',
                }}
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                as={RouterLink}
                to="/login"
                fontSize="md"
                color="#FFFDD0"
                fontWeight="bold"
                position="relative"
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: '#FFFDD0',
                  transition: 'width 0.3s ease',
                }}
              >
                Log In
              </Link>
              <Link
                as={RouterLink}
                to="/signup"
                fontSize="md"
                color="#FFFDD0"
                fontWeight="bold"
                position="relative"
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: '#FFFDD0',
                  transition: 'width 0.3s ease',
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </Flex>
      </Flex>
      <motion.div
        ref={menuRef}
        className="slide-out-menu"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        exit="exit"
        variants={menuVariants}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          px="2rem"
          py="1rem"
          bg="rgba(255, 255, 255, 0.9)"
          boxShadow="lg"
          rounded="md"
          position="absolute"
          top="0"
          right="0"
          zIndex="999"
          w="100%"
          h="100%"
        >
          <Text
            as="h2"
            fontSize="xl"
            color="#2C2C2C"
            fontWeight="bold"
            mb="2rem"
            _hover={{ color: 'gold' }}
          >
            Menu
          </Text>
          <Divider orientation="horizontal" mb="2rem" />
          <motion.div variants={itemVariants}>
            <Link
              as={RouterLink}
              to="/"
              fontSize="lg"
              color="#2C2C2C"
              fontWeight="bold"
              _hover={{ color: 'gold' }}
              mb="2rem"
            >
              Home
            </Link>
          </motion.div>
          {isAuthenticated ? (
            <>
              <motion.div variants={itemVariants}>
                <Link
                  as={RouterLink}
                  to="/elite"
                  fontSize="lg"
                  color="#2C2C2C"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  mb="2rem"
                >
                  Elite
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  as={RouterLink}
                  to="/cart"
                  fontSize="lg"
                  color="#2C2C2C"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  mb="2rem"
                >
                  Shopping Cart
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  as={RouterLink}
                  to="/checkout"
                  fontSize="lg"
                  color="#2C2C2C"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  mb="2rem"
                >
                  Checkout
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  as={RouterLink}
                  to="/"
                  fontSize="lg"
                  color="#2C2C2C"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  onClick={logout}
                  mb="2rem"
                >
                  Log Out
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div variants={itemVariants}>
                <Link
                  as={RouterLink}
                  to="/login"
                  fontSize="lg"
                  color="#2C2C2C"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  mb="2rem"
                >
                  Log In
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  as={RouterLink}
                  to="/signup"
                  fontSize="lg"
                  color="#2C2C2C"
                  fontWeight="bold"
                  _hover={{ color: 'gold' }}
                  mb="2rem"
                >
                  Sign Up
                </Link>
              </motion.div>
            </>
          )}
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Navbar;
