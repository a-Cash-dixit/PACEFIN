import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <Container>
          <Navbar.Brand href="#home">{`<Akash />`}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
