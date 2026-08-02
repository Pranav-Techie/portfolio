import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "../styles/footer.css";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setShowTop(scrollPosition > pageHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Mac Terminal */}

      <div className="footer-terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span className="terminal-title">
            pranav@PranavOS — zsh
          </span>
        </div>

        <div className="terminal-preview">
          <div className="terminal-cursor">
            %
            <span className="cursor"></span>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="footer-content">
        {/* Left */}

        <div className="footer-social">
          <a
            href="https://github.com/Pranav-Techie"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pranav-jha-039688300/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:pranavjha79924@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Center */}

        <div className="footer-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <span>PRANAV JHA</span>. ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Right */}

        <div className="footer-right">
          <span>Developed by</span>
          <h4>Pranav</h4>
        </div>
      </div>

      {/* Back To Top */}

      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}