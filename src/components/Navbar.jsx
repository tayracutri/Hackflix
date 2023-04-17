import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" id="navbar-title">
          TAYFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" id="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about-us" id="nav-link">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link href="/contact-us" id="nav-link">
              <Link to="contact-us" id="nav-link">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
          {/* <form onSubmit={searchMovies}>
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search movie</button>
          </form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
