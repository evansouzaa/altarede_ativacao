import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap'
import { useWindowSize } from '../../hooks';

export const NavBar = () => {
    const expand = useWindowSize()

    return (
        <Navbar collapseOnSelect={true} bg="dark" variant="dark" expand={expand} className={expand ? "rounded" : ""}>
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>Altarede</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <LinkContainer to="/">
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <LinkContainer to="/">
                                    <Nav.Link>Altarede</Nav.Link>
                                </LinkContainer>
                            </Offcanvas.Title>
                        </LinkContainer>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-2">
                            <LinkContainer to="/ativacao">
                                <Nav.Link>Ativação</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/troca_ont">
                                <Nav.Link disabled={true}>Trocar Ont</Nav.Link>
                            </LinkContainer>
                            <NavDropdown
                                title="Outros"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <LinkContainer to="/gridlab">
                                    <NavDropdown.Item disabled={true}>Gridlab</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/distancia">
                                    <NavDropdown.Item disabled={true}>Medir distância</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/sobre">
                                    <NavDropdown.Item disabled={true}>Sobre</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    );
}