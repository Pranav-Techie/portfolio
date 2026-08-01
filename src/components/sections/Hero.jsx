import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Terminal from "../terminal/Terminal";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">

        <p className="hero-intro">👋 Hello, I'm</p>

        <h1 className="hero-name">
          Pranav <span>Jha</span>
        </h1>

        <div className="hero-role">
          <TypeAnimation
            sequence={[
              "Software Engineer", 2000,
              "Full Stack Developer", 2000,
              "AI Developer", 2000,
              "React Developer", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="hero-desc">
          Building AI-powered applications, scalable web platforms and modern
          software experiences using React, Node.js and Python.
        </p>

        <div className="hero-buttons">

  <MagneticButton
    className="primary-btn"
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    View Projects
  </MagneticButton>

  <MagneticButton
    className="secondary-btn"
    onClick={() => window.open("/resume.pdf", "_blank")}
  >
    <FaDownload />
    Resume
  </MagneticButton>
</div>
<div className="hero-social">

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
    href="https://medium.com/@pranavjha79924"
    target="_blank"
    rel="noreferrer"
    aria-label="Medium"
  >
    <FaMedium />
  </a>

</div>
      </div>
      <div className="hero-right">
        <Terminal />
      </div>
    </section>
  );
}