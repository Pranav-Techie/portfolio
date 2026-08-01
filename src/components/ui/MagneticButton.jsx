import { useRef } from "react";

export default function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </button>
  );
}