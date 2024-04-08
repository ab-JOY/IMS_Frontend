import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as Link } from 'react-router-hash-link';

export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">SVTA</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link smooth to="/#home" className="nav-link">Home</Link>
                        <Link smooth to="/#programs" className="nav-link">Programs</Link>
                        <Link smooth to="/#about" className="nav-link">About Us</Link>
                        <Link smooth to="/#officers" className="nav-link">Officer Directory</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
