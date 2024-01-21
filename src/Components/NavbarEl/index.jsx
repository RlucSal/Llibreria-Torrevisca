import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";

function NavbarEl() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand>
          <img src="/imgs/Torrevisca_Logo.png" className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navlink beige-text" to="/">
              Home
            </Link>
            <Link className="navlink beige-text" to="product-catalogue">
              Product Catalogue
            </Link>
            <Link className="navlink beige-text" to="Events">
              Events
            </Link>
            <Link className="navlink beige-text" to="about-us">
              About Us
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link className="navlink beige-text" to="log-in">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="user-icon"
                size="lg"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEl;
