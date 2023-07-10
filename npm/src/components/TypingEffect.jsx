import React, { useState, useEffect } from 'react';

const TypingEffect = ({ htmlContent }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex === htmlContent.length-1) {
        clearInterval(typingInterval);
        setIsAnimationComplete(true);
        return;
      }

      setDisplayText((prevText) => prevText + htmlContent[currentIndex]);
      currentIndex++;
    }, 100); // 100 is the typing speed (in ms)

    return () => {
      clearInterval(typingInterval); // Clean up the interval on component unmount
    };
  }, [htmlContent]);

  return (
    <div>
      {isAnimationComplete ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: displayText }}></div>
      )}
    </div>
  );
};

export default TypingEffect;
