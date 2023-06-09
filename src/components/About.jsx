/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import image from "../assets/about.png";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { SiFiverr, SiUpwork, } from "react-icons/si";

import { styled } from "styled-components";
import Stars from "./Stars";

const Fiverr = styled(SiFiverr)`
  font-size: 8rem;
  color: #1dbf73;
`;
const Upwork = styled(SiUpwork)`
  font-size: 8rem;
  color: #1dbf73;
`;




const About = () => {
  return (
    <section id="about">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="title underline ">ABOUT ME</h1>
            <div className="about-card  mt-4  d-flex">
              <div className="about-left-section ">
                <img className="about-img" src={image} alt="Helo" />
              </div>
              <div className="abuot-right-section d-flex flex-column py-4">
                <h3 className="h3">Full Stack Web Developer</h3>
                <p className="about-detail mt-3">
                  My name is Junaid Ali, and I am a web developer with a passion
                  for creating exceptional digital experiences. I specialize in
                  front-end development and have a strong background in crafting
                  visually appealing and user-friendly websites.
                </p>
                <a
                  href={
                    "https://wa.me/923041577841?text='I've contacted from website'"
                  }
                  className="btn btn-primary"
                >
                  Contact Me
                </a>

                <div className="social-row ">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/junaid-ali-a82ba021b/"
                  >
                    <BsLinkedin className="social linkedin" />
                  </a>
                  <a
                    target="_blank"
                    href="https://web.facebook.com/hacker.jhalla"
                  >
                    <BsFacebook className="social facebook" />
                  </a>
                  <a
                    target="_blank"
                    href={
                      "https://wa.me/923041577841?text='I've contacted from website'"
                    }
                  >
                    <BsWhatsapp className="social whatsapp" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/junaidinstalker/"
                  >
                    <BsInstagram className="social instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12">
            <h1 className="underline">HIRE ME ON </h1>
          </div>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <div className="col-md-6">
            <div className="border-radius-5 py-4 shadow ">
              <Fiverr />
              <h3>Fiverr</h3>
              <Stars rating={5}  />
              <h6 className="text-dark">Level One Seller with 28+ five star reviews</h6>
              <a href="https://www.fiverr.com/junaidseller" target="_blank" className="btn btn-secondary">Order Now</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border-radius-5 py-4 shadow mt-4 mt-md-0">
              <Upwork />
              <h3>Upwork</h3>
              <Stars rating={5}  />
              <h6 className="text-dark">Multiple Jobs done with 5 star reviews</h6>
              <a href="https://www.upwork.com/freelancers/~0103dd022df3b8e518" target="_blank" className="btn btn-secondary">Hire Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
