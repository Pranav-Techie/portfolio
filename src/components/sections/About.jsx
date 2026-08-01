import AboutTerminal from "../terminal/AboutTerminal";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <p>ABOUT ME</p>
        <h2>{"$ cat about.json"}</h2>
        <p className="section-subtitle">
          Get to know me better.
        </p>
      </div>

      <AboutTerminal />
    </section>
  );
}