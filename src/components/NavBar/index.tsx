import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="rounded">
        <Container>
          <Navbar.Brand href="#home">Altarede</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Ativação</Nav.Link>
            <Nav.Link href="#features">Trocar Ont</Nav.Link>
            <Nav.Link href="#pricing">Gridlab</Nav.Link>
            <Link to={"/MainPage"}>testes</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}