import React from "react";
import animationData from "../assets/animation.json";
import Lottie from "react-lottie";

const Header = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="header">
      <div className="container ">
        <div className="row mb-5">
          <div className="col-md-6 right-content">
            <div className="title text-style">
              Unleashing the Power of Web Development
            </div>
            <h3 className="subtitle mt-4">
              Elevating Businesses with Custom Web Development
            </h3>
            <button className="justify-self-start my-4 btn header-btn btn-primary ">
              Book Your Website
            </button>
          </div>
          <div className="col-md-6">
            <Lottie options={lottieOptions} width={"90%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
