import { Nav, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import Home from './Home.tsx';
import About from './About.tsx';
import Coding from './Coding.tsx';
import Art from './Art.tsx';
import Contact from './Contact.tsx';

export default function App() {


  return (
    <main>
      <Router>
        <Nav variant="underline" className="bg-body-tertiary" defaultActiveKey="/">
          <Nav.Item>
            <NavLink to="/" className="nav-link">
              <Image src='/assets/logo2.png' fluid />
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about" className="nav-link">About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/coding" className="nav-link">Coding</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/art" className="nav-link">Art</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav.Item>
        </Nav>

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

