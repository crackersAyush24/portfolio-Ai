import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        setIsGlitching(true);
        
        // Create glitch effect
        const glitchDuration = 200 + Math.random() * 300;
        const glitchSteps = 5;
        let step = 0;

        const glitchStep = () => {
          if (step < glitchSteps) {
            const newText = text
              .split('')
              .map(char => 
                Math.random() < 0.3 
                  ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
                  : char
              )
              .join('');
            setGlitchText(newText);
            step++;
            setTimeout(glitchStep, glitchDuration / glitchSteps);
          } else {
            setGlitchText(text);
            setIsGlitching(false);
          }
        };

        glitchStep();
      }
    }, 3000 + Math.random() * 5000); // Random interval between 3-8 seconds

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'animate-pulse text-red-500' : ''} transition-all duration-100`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00' 
          : 'none'
      }}
    >
      {glitchText}
    </span>
  );
};

export default GlitchText;