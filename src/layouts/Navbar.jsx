import React from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarFlow = () => {
  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <div className="cont-2">
            <Nav.Link as={Link} to="/">
              <img src="/src/assets/img/img3.png" alt="poke ubicacion" />
              Poke ubicación
            </Nav.Link>
          </div>
          <div className="cont-1">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Pokemon">
              Pokemon
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarFlow;
