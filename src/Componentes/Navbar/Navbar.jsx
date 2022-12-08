import React from 'react'
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavbarBoos() {
  return (
    <>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Escabio 24/7</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to={'/Productos'}>Productos</Link>
            <NavDropdown title="Acceder" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Registrarse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Iniciar Sesion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  )
}

