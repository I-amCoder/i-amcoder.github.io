import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <Navbar className="custom-nav shadow" bg="secondary" expand="lg">
      <Container>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand className="text-style">
            Junaid Web Serivces
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="custom-navbar-nav" />
        <Navbar.Collapse id="custom-navbar-nav">
          <Nav className="d-flex fw-bold justify-content-end w-100">
            <Link className="nav-link" to={"/intro"}>
              Intro
            </Link>

            <Link className="nav-link" to={"/survey"}>
              Survey
            </Link>

            <Link className="nav-link" to={"/"}>
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
