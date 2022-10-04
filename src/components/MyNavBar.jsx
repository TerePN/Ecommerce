import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

const MyNavBar = () => {
    return (
        <div>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
            <Nav.Link >Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default MyNavBar;