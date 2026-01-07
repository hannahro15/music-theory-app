import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar as RBNavbar, Nav, NavDropdown, Container, Dropdown } from 'react-bootstrap';

function Navbar() {
  return (
    <RBNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <RBNavbar.Brand href="#home">Music Theory</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-nav" />
        <RBNavbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Theory" id="theory-dropdown">
              <NavDropdown.Item href="/scales">Scales</NavDropdown.Item>
              <NavDropdown.Item href="#arpeggios">Arpeggios</NavDropdown.Item>
              <NavDropdown.Item href="#dom-dim">Dominant and Diminished 7ths</NavDropdown.Item>
              <NavDropdown.Item href="#chord-construction">Chord Construction</NavDropdown.Item>
              <NavDropdown.Item href="#circle-of-fifths">Circle of Fifths</NavDropdown.Item>
              <NavDropdown.Item href="#key-signatures">Key Signatures</NavDropdown.Item>
              <NavDropdown.Item href="#intervals">Intervals</NavDropdown.Item>
            </NavDropdown>
                
            <NavDropdown title="Activities" id="quizzes-dropdown">
              <NavDropdown.Item href="/ear-training">Ear training</NavDropdown.Item>
              <NavDropdown.Item href="#notation">Notation</NavDropdown.Item>
              <NavDropdown.Item href="#intervals">Intervals</NavDropdown.Item>
              <NavDropdown.Item href="#chords">Chords</NavDropdown.Item>
              <NavDropdown.Item href="#rhythm">Rhythm</NavDropdown.Item>
              <NavDropdown.Item href="#circle-of-fifths">Scales</NavDropdown.Item>
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

export default Navbar;