import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from "react-router-dom";
function Navbars() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark px-4">
        <Navbar.Brand href="#home">React-tutorials</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Chapters" id="basic-nav-dropdown">
              <Link to="/" className='px-4 py-4'>Home</Link><br />
              <Link to="/text-convert" className='px-4 py-4'>Text Conversion</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;