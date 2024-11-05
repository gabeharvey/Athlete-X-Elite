/* eslint-disable react/prop-types */
import { Box, Text, Icon } from '@chakra-ui/react';
import Slider from "react-slick";
import { 
  FaBasketballBall, FaFootballBall, FaBaseballBall, FaVolleyballBall, 
  FaGolfBall, FaTableTennis, FaHockeyPuck, FaSkiing, FaRunning, 
  FaBiking, FaDumbbell, FaSwimmer, FaFutbol, FaAngleLeft, FaAngleRight 
} from 'react-icons/fa'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <Box
      className="custom-arrow prev-arrow"
      onClick={onClick}
      position="absolute"
      left="10px"
      top="50%"
      transform="translateY(-50%)"
      bg="transparent"
      _hover={{ bg: "transparent", borderRadius: "50%", transition: "background 0.3s" }}
      p={1}
      zIndex={1}
    >
      <Icon as={FaAngleLeft} color="#FFFDD0" boxSize={6} />
    </Box>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <Box
      className="custom-arrow next-arrow"
      onClick={onClick}
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      bg="transparent"
      _hover={{ bg: "transparent", borderRadius: "50%", transition: "background 0.3s" }}
      p={3}
      zIndex={1}
    >
      <Icon as={FaAngleRight} color="#FFFDD0" boxSize={6} />
    </Box>
  );
};  

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sports = [
    { icon: FaBasketballBall, label: 'Basketball' },
    { icon: FaFootballBall, label: 'Football' },
    { icon: FaBaseballBall, label: 'Baseball' },
    { icon: FaVolleyballBall, label: 'Volleyball' },
    { icon: FaGolfBall, label: 'Golf' },
    { icon: FaTableTennis, label: 'TableTennis' },
    { icon: FaHockeyPuck, label: 'Hockey' },
    { icon: FaSkiing, label: 'Skiing' },
    { icon: FaRunning, label: 'Track' },
    { icon: FaBiking, label: 'Biking' },
    { icon: FaDumbbell, label: 'Weightlifting' },
    { icon: FaSwimmer, label: 'Swimming' },
    { icon: FaFutbol, label: 'Soccer' },
  ];

  return (
    <Box bg="black" p={3} w="100%" maxW="1200px" mx="auto">
      <Slider {...settings}>
        {sports.map((sport, index) => (
          <Box
            key={index}
            bg="transparent"
            p={3} 
            m={2} 
            borderRadius="lg"
            boxShadow="lg"
            textAlign="center"
            fontWeight="bold"
            color="#FFFDD0"
            backgroundImage="linear-gradient(-45deg, black 25%, transparent 25%, transparent 50%, black 50%, black 75%, transparent 75%, transparent)"
            backgroundSize="5px 5px"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold' }}
          >
            <Link to={`/${sport.label.toLowerCase()}`}>
              <Icon as={sport.icon} boxSize={6} />
              <Text fontSize="md" fontWeight='light' fontFamily="'Changa', cursive">{sport.label}</Text>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Home;
