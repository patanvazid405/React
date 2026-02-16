import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container fluid>
        <Navbar.Brand href=""><img  style={{width:"60px",borderRadius:"20px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsVOwBU6nCYkpNiQTecz0FqhebSlxW4PkcQ&s" alt="" /> Food Truck</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />                                                             
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link style={{textDecoration:"None",color:"black"}} to="/">Home</Link> </Nav.Link>
            <Nav.Link ><Link style={{textDecoration:"None",color:"black"}}to="/about"> About</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:"None",color:"black"}}to="/service">Services</Link></Nav.Link>
            {/* <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/service">Order now</NavDropdown.Item>
              <NavDropdown.Item href="/service">
                Take an Order
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Catering
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;


