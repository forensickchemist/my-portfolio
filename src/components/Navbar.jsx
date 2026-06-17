import { useState, useEffect } from "react";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <span className="navbar__logo">
        fritz<br/>dev
      </span>
      <div className="navbar__links">
        {["about", "skills", "projects", "contact"].map((s) => (
          <a key={s} href={`#${s}`} className="navbar__link">{s}</a>
        ))}
      </div>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
