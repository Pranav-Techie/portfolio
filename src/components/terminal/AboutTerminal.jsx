import profile from "../../assets/images/profile.png";

export default function AboutTerminal() {
  return (
    <div className="about-terminal">

      {/* Terminal Header */}
      <div className="about-header">
        <div className="about-buttons">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="about-title">
          profile.json — PranavOS
        </div>
      </div>

      {/* Body */}
      <div className="about-grid">

        {/* Left Profile */}
        <div className="about-left">

          <img src={profile} alt="Pranav Kumar Jha" />

          <h3>Pranav Jha</h3>

          <p>Software Engineer</p>

          <div className="about-status">
            <span className="status-dot"></span>
            Available for Internship
          </div>

        </div>

        {/* Right Content */}
        <div className="about-right">

          <div className="about-right">

  <div className="terminal-block">
    <span className="command">$ education</span>

    <span className="output">
      B.Tech in Computer Science & Engineering
    </span>

    <span className="value">
      SRM Institute of Science & Technology
    </span>
  </div>

  <div className="terminal-block">
    <span className="command">$ location</span>

    <span className="output">
      🇮🇳 Chennai, India
    </span>
  </div>

  <div className="terminal-block">
    <span className="command">$ about</span>

    <span className="output">
      <span className="output">
Passionate Software Engineering student with a strong interest in
full-stack development, scalable backend systems, and AI-powered
applications. I enjoy building modern, responsive web experiences
while continuously learning new technologies and solving real-world problems.
</span>
    </span>
  </div>

  <div className="terminal-block">
    <span className="command">$ goal</span>

    <span className="output">
      Building scalable software solutions and continuously improving
    my skills through real-world development and AI innovation.
    </span>
  </div>

  <div className="terminal-input">
    <span className="command">$</span>
    <span className="cursor"></span>
  </div>

</div>

        </div>

      </div>

    </div>
  );
}