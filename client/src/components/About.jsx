import { useState, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isH3Visible, setIsH3Visible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const audioRef = useRef(null); 

  const handleStart = () => {
    setIsVisible(true); 
    audioRef.current.play(); 
    setTimeout(() => {
      setIsH2Visible(true);
    }, 3000);
    setTimeout(() => {
      setIsH3Visible(true);
    }, 6000); 
    setIsButtonVisible(false); 
  };

  return (
    <div className="about-container">
      {isButtonVisible && ( 
        <button className="clickMe" onClick={handleStart} style={{ marginTop: '2px' }}>
          Click & Learn More!
        </button>
      )}
      <h1 className={isVisible ? 'zoom-in' : ''}>
        Welcome to <span className="tilt-prism">Athlete X Elite</span>! You have done all the hard work and sacrifice. Allow us to present your Elite Athlete to the world!
      </h1>
      <div className="fancy-divider"></div>
      <h2 className={isH2Visible ? 'zoom-in' : ''}>
        Mobile friendly, yet responsive app showcasing athletic abilities.
      </h2>
      <div className="fancy-divider"></div>
      {isH3Visible && (
        <div className="zoom-in">
          <h3>
            It is crucial to stand out! The talent and skills are there. People want to see it quickly and First Class!
          </h3>
        </div>
      )}
      <p className="centered-text">
        Do not see your sport listed? <span className="tilt-prism">Athlete X Elite</span> has you covered! 
        <Link to="/contact" style={{ marginLeft: '5px', color: '#FFA500', textDecoration: 'underline' }}>
          Contact
        </Link> 
        {' '} 
        us for more information!
      </p>
      <audio ref={audioRef} src="/outdoor-basketball-bounce.mp3" preload="auto" />
    </div>
  );
}

export default About;
