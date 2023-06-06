import React from "react";
import image from "../images/junaid.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="title">ABOUT ME</h1>
            <div className="card about-card shadow d-flex">
              <div className="row">
                <div className="col-md-2">
                  <img className="about-img" src={image} alt="Helo" />
                </div>
                <div className="col-md-10">
                  <p>
                    My name is Junaid Ali, and I am a web developer with a
                    passion for creating exceptional digital experiences. I
                    specialize in front-end development and have a strong
                    background in crafting visually appealing and user-friendly
                    websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
