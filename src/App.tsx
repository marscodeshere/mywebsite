import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import Home from './Home.tsx'

export default function App() {


  return (
    <main>
      <Router>
        <Nav variant="tabs" className="bg-body-tertiary">
          <Nav.Item>
            <NavLink to="/" className="nav-link">MOMENS Studios</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/" className="nav-link">About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/" className="nav-link">Coding</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/" className="nav-link">Art</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/" className="nav-link">Contact</NavLink>
          </Nav.Item>
        </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>

    <footer className="mt-4 text-muted">
      <p>&copy; {new Date().getFullYear()} MOMENS Studios. All rights reserved.</p>
    </footer>

    </main>
  );
}

