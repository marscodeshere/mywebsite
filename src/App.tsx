import { Nav, Image, Navbar, Container} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import Home from './Home.tsx';
import About from './About.tsx';
import Coding from './Coding.tsx';
import Art from './Art.tsx';
import Contact from './Contact.tsx';
import logo from './assets/logo3.png'

export default function App() {


  return (
    <main>
      <Router>
        <Navbar expand="lg">
          <Image src={logo} id="nav-logo"/>
          <Container id="nav-container">
            <Navbar.Brand>
              <NavLink to="/" className="nav-link">MOMENS Studios</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                  <NavLink to="/coding" className="nav-link">Coding</NavLink>
                  <NavLink to="/art" className="nav-link">Art</NavLink>
                  <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>

    <footer className="mt-4 text-muted">
      <p>&copy; {new Date().getFullYear()} MOMENS Studios. All rights reserved.</p>
    </footer>

    </main>
  );
}

