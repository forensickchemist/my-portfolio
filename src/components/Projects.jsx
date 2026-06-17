import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <span className="section__label">projects</span>
        <h2 className="section__title">Things I've built</h2>
        <div className="section__rule" />
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-card__header">
                <span className="project-card__icon">{project.icon}</span>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">GitHub ↗</a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="proj-link">Live ↗</a>
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__stack">
                {project.stack.map((s) => (
                  <span key={s} className="stack-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
