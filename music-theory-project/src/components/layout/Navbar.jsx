import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar as RBNavbar, Nav, NavDropdown, Container, Dropdown } from 'react-bootstrap';
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
              <NavDropdown.Item href="#circle-of-fifths">Circle of Fifths</NavDropdown.Item>
              <NavDropdown.Item href="#key-signatures">Key Signatures</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to="/theory/intervals">Intervals</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/theory/musical-glossary">Musical Glossary</NavDropdown.Item>
            </NavDropdown>
                
            <NavDropdown title="Activities" id="quizzes-dropdown">
              <NavDropdown.Item as={NavLink} to="/activities/ear-training">Ear training</NavDropdown.Item>
              <NavDropdown.Item href="#notation">Notation</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/intervals">Intervals</NavDropdown.Item>
              <NavDropdown.Item href="#chords">Chords</NavDropdown.Item>
              <NavDropdown.Item href="#rhythm">Rhythm</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/scales">Scales</NavDropdown.Item>
              <NavDropdown.Item href="#scales-quiz">Classical Music Quiz</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Instrument" id="instrument-dropdown">
              <Dropdown drop="end" as="div" className="dropdown-submenu">
                <Dropdown.Toggle as="a" className="dropdown-item">Violin</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#violin-fingerings">Fingerings</Dropdown.Item>
                  <Dropdown.Item href="#violin-technique">Technique</Dropdown.Item>
                  <Dropdown.Item href="#violin-excerpts">Orchestral Excerpts</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </NavDropdown>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}
