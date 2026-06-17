import { personal } from "../data/portfolio";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <span className="section__label">about me</span>
        <h2 className="section__title">Who I am</h2>
        <div className="section__rule" />
        <div className="about__grid">
          <div className="about__text">
            {personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about__aside">
            {[
              { label: "Location", value: personal.location },
              { label: "Role", value: personal.role },
              { label: "Training", value: "Full Stack Bootcamp(s)" },
              { label: "Focus", value: "Frontend + Backend" },
              { label: "Status", value: "● Open to work", highlight: true },
            ].map((row) => (
              <div key={row.label} className="info-row">
                <span className="info-row__label">{row.label}</span>
                <span className={`info-row__value ${row.highlight ? "info-row__value--green" : ""}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
