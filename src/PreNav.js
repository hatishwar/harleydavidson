import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navflag from './assets/india.png';

function PreNav() {
  return (
    <Navbar expand="lg" id="prenav">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Learn to Ride</Nav.Link>
            <Nav.Link href="#link">Test Ride</Nav.Link>
            <Nav.Link href="#link">Dealer Locator</Nav.Link>
            <Nav.Link href="#link"><img id="imgflag" src={navflag} alt="India Flag" /></Nav.Link>
            <Nav.Link href="#link">India - English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PreNav;
