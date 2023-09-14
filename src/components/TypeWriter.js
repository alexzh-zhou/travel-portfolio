import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);  

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) { 
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (currentIndex === text.length && !isWaiting && infinite) {  
      timeout = setTimeout(() => {  
        setIsWaiting(false);  
        setCurrentIndex(0);   
        setCurrentText('');   
      }, 2500);  

    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, isWaiting]);

  return <span>{currentText}</span>;
};

export default Typewriter;
