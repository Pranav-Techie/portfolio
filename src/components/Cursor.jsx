import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const ring = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    const targets = document.querySelectorAll(
      "a, button, .skill-card, .project-card, .experience-card, .certificate-card, .contact-card, .about-terminal"
    );

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    let animation;

    const animate = () => {
      // Smaller value = heavier cursor
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("mousemove", move);

      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring ${hover ? "cursor-hover" : ""}`}
      />

      <div
        ref={dotRef}
        className="cursor-dot"
      />
    </>
  );
}