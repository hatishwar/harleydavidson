import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/R.jpeg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} width='100px'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">BIKES</Nav.Link>
            <Nav.Link href="#link">PARTS</Nav.Link>
            <Nav.Link href="#link">MENS</Nav.Link>
            <Nav.Link href="#link">WOMENS</Nav.Link>
            <Nav.Link href="#link">EXPERIENCE H-D</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form inline>
        <Row>
          <Col xs="8">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="4">
            {/* <Button variant='dark' type="submit">Submit</Button> */}
            Sign In
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default MyNavbar;