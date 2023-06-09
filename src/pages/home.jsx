import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import About from "../components/About";

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
    </>
  );
};

export default Home;
