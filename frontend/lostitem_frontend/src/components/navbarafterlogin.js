import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/navafterlogin.css";
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import "../css/logo.css";
const navbarafterlogin = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#2e186a' }}>
      <Container fluid>
        <img
        src={Logo} 
        height="30" 
        className="logostyle"
        alt="Logo"
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='ms-auto'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/feed" className='nav-link link' style={{ color: 'white', fontWeight: 'bold' }}>Feed</Link>
            <Link to="/post-new" className='nav-link link' style={{ color: 'white', fontWeight: 'bold' }}>Post New</Link>
            <Link to="/history" className='nav-link link' style={{ color: 'white', fontWeight: 'bold' }}>History</Link>
            <Link to="/messages" className='nav-link link' style={{ color: 'white', fontWeight: 'bold' }}>Messages</Link>
            <Link to="" className='nav-link link' style={{ color: 'white', fontWeight: 'bold' }}>Signout</Link>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbarafterlogin
