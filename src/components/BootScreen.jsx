import { useEffect, useState } from "react";

const bootLines = [
  "Last login: Today on localhost",
  "",
  "pranav@PranavOS ~ % boot",
  "",
  "✓ Loading Portfolio...",
  "✓ Loading Components...",
  "✓ Loading Projects...",
  "✓ Loading Skills...",
  "✓ Loading Experience...",
  "",
  "Launching Portfolio...",
];

export default function BootScreen({ onFinish }) {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < bootLines.length) {
        setVisibleLines((prev) => [...prev, bootLines[index]]);
        index++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 600);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="boot-screen">

      <div className="boot-terminal">

        <div className="boot-header">

          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>

          <div className="boot-title">
            PranavOS Terminal
          </div>

        </div>

        <div className="boot-body">

          {visibleLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}

          <span className="cursor">▊</span>

        </div>

      </div>

    </div>
  );
}