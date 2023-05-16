import React, { useEffect, useRef } from "react";
import video from "../images/background.mp4";
import Typist from "react-typist";
import image from "../images/junaid.jpg";

const Home = () => {
  const vidRef = useRef(null);
  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <>
      <video ref={vidRef} loop muted autoPlay src={video} id="bg-video" />
      <div className="home-container"></div>0
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-dark">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 ">
                    <img className="home-image" src={image} alt="Junaid Ali" />
                  </div>
                  <div className="col-md-8">
                    <h1 className=" neon text-style mt-4">
                      <Typist>Junaid Ali Here, Full Stack Web Developer</Typist>
                    </h1>
                    <p className="text-light mt-4">
                      A full stack web developer proficient in React.js and
                      Laravel, with a strong foundation in HTML, CSS, and
                      Bootstrap. Skilled in developing end-to-end web
                      applications, I have expertise in both front-end and
                      back-end technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
