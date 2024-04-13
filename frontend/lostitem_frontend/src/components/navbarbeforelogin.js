import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.png';
import "../css/logo.css";
const navbar = () => {
  return (
  <Navbar expand="lg"  style={{ backgroundColor: '#2e186a' }} data-bs-theme="dark">
  <Container fluid>
    <img
     src={Logo} 
     height="30" 
     className="logostyle"
     alt="Logo"
    />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px', color: '#6495ed' }}
        navbarScroll
      >
      </Nav>
      <Button variant="primary" style={{ borderColor: '#32cd32', color: 'white',fontWeight: 'bold', marginRight: '10px' }}>Login</Button>
      <Button variant="success" style={{ borderColor: '#32cd32', color: 'white',fontWeight: 'bold' }}>Signup</Button>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default navbar
