import React, { useState } from 'react'
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CartSidebar from './CartSidebar'



  const MyNavBar = () => {
  const navigate = useNavigate()

  const logout = () => {
		localStorage.setItem('token', '')
		navigate('/login')
	}
  const [show, setShow] = useState(true)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
    return (
        <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={Link}>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
            <Nav.Link as={Link} to="/productsItems/:id">Products</Nav.Link>
            <Nav.Link onClick={handleShow}><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
							<Nav.Link onClick={logout}>Logout</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<CartSidebar show={ show} handleClose={handleClose} />
        </>
    );
};

export default MyNavBar;