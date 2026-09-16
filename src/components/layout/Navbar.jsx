import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar as RBNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <RBNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <RBNavbar.Brand as={NavLink} to="/">Music Theory</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-nav" />
        <RBNavbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>

            <NavDropdown title="Theory" id="theory-dropdown">
              <NavDropdown.Item as={NavLink} to="/theory/scales">Scales</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/theory/arpeggios">Arpeggios and 7th Chords</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to="/theory/intervals">Intervals</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/theory/musical-glossary">Musical Glossary</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/activities/classical-music-quiz">Classical Music Quiz</Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}
