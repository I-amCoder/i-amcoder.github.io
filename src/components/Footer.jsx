import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-primary">
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h2>Junaid Web Services</h2>

          </div>
        </div>
        <div className="row">
          <div className="py-4 col-md-6 col-xl-4">
            <h4 >About Links</h4>
            <h6>Helo</h6>
            <h6>Helo</h6>
            <h6>Helo</h6>
            <h6>Helo</h6>
            <h6>Helo</h6>
          </div>
          <div className="py-4 col-md-6 col-xl-4">
            <h4>Important Links</h4>
            <ul className="footer-list">
              <li>Contact Us</li>
              <li>Projects</li>
              <li>Copyright</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="py-3 text-center">
        © 2023 Junaid Web Services - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
