import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function navBar(){
    return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Codex</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link> */}
            {/* <Nav.Link href="/top-games">Top Games</Nav.Link> */}
            </Nav>
            <Nav>
            <Nav.Link href="#DarkMode"><i class='bx bx-sun'></i></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    )
}

export default navBar;