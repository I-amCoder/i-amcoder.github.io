import React, { useEffect } from "react";
import { useState } from "react";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="container main text-center pt-5">
      <div className={`name fade-in ${fadeIn?'fade-in-active':''}  p-2`}>Helo Junaid!</div>
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
