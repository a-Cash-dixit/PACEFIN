import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <Container>
          <Navbar.Brand href="/">{`<Akash />`}</Navbar.Brand>
          <Nav className="me-auto">
          <Link style={{textDecoration:"none" ,color:"white",margin:"4px"}} to="/about">About</Link>
            <Link style={{textDecoration:"none" ,color:"white",margin:"4px"}} to="/projects">Projects</Link>
            <Link style={{textDecoration:"none" ,color:"white",margin:"4px"} }to="/experience">Experience</Link>
            <Link style={{textDecoration:"none",color:"white",margin:"4px"}} to="/skills">Skills</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
