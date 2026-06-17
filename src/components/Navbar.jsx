import { useState, useEffect } from "react";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <span className="navbar__logo">
        fritz<br />dev
      </span>

      {/* Desktop links */}
      <div className="navbar__links">
        {["about", "skills", "projects", "contact"].map((s) => (
          <a key={s} href={`#${s}`} className="navbar__link">{s}</a>
        ))}
      </div>

      <div className="navbar__right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {["about", "skills", "projects", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="mobile-menu__link"
              onClick={closeMenu}
            >
              {s}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}