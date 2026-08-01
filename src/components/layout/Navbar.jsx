import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ThemeToggle from "../ThemeToggle";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="navbar">

      <div className="logo">
        Pranav<span>OS</span>
      </div>

      <nav className={`nav-menu ${open ? "active" : ""}`}>

        {links.map((link) => (

          <Link
            key={link.id}
            to={link.id}
            smooth={true}
            spy={true}
            duration={120}
            offset={-80}
            activeClass="active-nav"
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>

        ))}

      </nav>


      {/* RIGHT SIDE CONTROLS */}

      <div className="nav-actions">

        <ThemeToggle />

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>

  );
}