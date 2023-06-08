/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import image from "../images/junaid.jpg";

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
                    "https://wa.me/923041577941?text='I've contacted from website'"
                  }
                  className="btn btn-primary"
                >Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
