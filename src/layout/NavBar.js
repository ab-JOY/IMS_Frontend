import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">SVTA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/programs">Programs</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/officers">Officer Directory</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
