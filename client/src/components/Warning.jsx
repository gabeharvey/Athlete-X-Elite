// Warning.js
import { useState, useEffect } from 'react';

const Warning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const message = "Due to overwhelming demand, all new requests will have a two-week waiting period."; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []); 

  return (
    <div className="warning-container" style={{ margin: '20px', textAlign: 'center' }}>
      {isVisible && (
        <h1
          className="fade-in"
          style={{
            color: '#FFA500', 
            fontSize: '1.2rem',
            fontFamily: "'Changa', cursive",
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            opacity: 0,
            transition: 'opacity 1s ease-in', 
            animation: 'fadeIn 1s forwards', 
          }}
        >
          {message}
        </h1>
      )}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Warning;
