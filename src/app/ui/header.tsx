import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavbarBrand
            href="/"
            style={{ fontWeight: '900', fontStyle: 'italic' }}
          >
            URBANX
          </NavbarBrand>
          <Nav className="me-auto">
            <NavLink href="/products">Products</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
