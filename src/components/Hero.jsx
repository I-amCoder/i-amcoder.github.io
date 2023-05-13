import React, { useEffect } from "react";
import { useState } from "react";

const Hero = () => {
  const [generatedText, setGeneratedText] = useState('');
  const [showText, setShowText] = useState(false);
  
  useEffect(()=>{
    const text = "I'm generating the text...";

    let currentIndex=0;
   
    const generateText = () => {
      if (currentIndex < text.length) {
        setGeneratedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
        setTimeout(generateText, 100); // Delay between each character
      } else {
        setShowText(true);
      }
    };

    generateText();
    
  },[])

  return (
    <div className="container main text-center pt-5">
      <div  className={`generated-text name ${showText ? 'show' : ''}`}>{generatedText}</div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">Helo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
