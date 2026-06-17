import { personal, stats } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Aurora background */}
      <div className="aurora">
        <div className="aurora__orb aurora__orb--1" />
        <div className="aurora__orb aurora__orb--2" />
        <div className="aurora__orb aurora__orb--3" />
        <div className="aurora__orb aurora__orb--4" />
        <div className="aurora__orb aurora__orb--5" />
      </div>

      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__blink" />
          Available for hire
        </div>
        <h1 className="hero__title">
          Hi, I'm <span className="hero__name">{personal.name}.</span>
          <br />I build for the web.
        </h1>
        <p className="hero__sub">
          Junior web developer passionate about crafting clean, functional web
          experiences. Trained in full stack development — from frontend
          interfaces to backend logic.
        </p>
        <div className="hero__tags">
          {["HTML/CSS/JS", "React", "Vite", "Python", "Django", "Open to work"].map(
            (tag, i) => (
              <span key={tag} className={`tag ${i < 4 ? "tag--hl" : ""}`}>
                {tag}
              </span>
            )
          )}
        </div>
        <div className="hero__btns">
          <a href="#projects" className="btn btn--primary">Explore my work →</a>
          <a href="#contact" className="btn btn--outline">Get in touch</a>
        </div>
      </div>

      <div className="hero__stats">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <span className="stat-card__num">{s.num}</span>
            <span className="stat-card__label">{s.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}