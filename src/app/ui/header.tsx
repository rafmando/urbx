import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavbarBrand href="#home">URBANX</NavbarBrand>
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
