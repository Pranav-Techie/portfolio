export default function Terminal() {
  return (
    <div className="terminal-window">

      <div className="terminal-header">

        <div className="terminal-buttons">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="terminal-title">
          pranavjha — zsh
        </div>

      </div>

      <div className="terminal-body">

<p className="command">$ pwd</p>
<p className="output">~/pranavos</p>

<p className="command">$ ls skills/</p>
<p className="output">
React • Next.js • Node.js • Express
</p>

<p className="command">$ git status</p>
<p className="value">
On branch <span>internship-2026</span>
</p>

<p className="command">$ npm run career</p>
<p className="output">
✔ Building scalable web applications...
</p>

<p className="command">$ system</p>
<p className="output">
<span className="status-dot"></span>
Ready for Internship
</p>

<div className="terminal-input">
<span className="command">$</span>
<span className="cursor"></span>
</div>

      </div>

    </div>
  );
}