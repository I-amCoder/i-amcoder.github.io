import React, { useEffect, useRef } from "react";
import video from "../images/background.mp4";
import Typist from "react-typist";
import image from "../images/junaid.jpg";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  const vidRef = useRef(null);
  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
};

export default Home;
