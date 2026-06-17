import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="section__inner">
        <span className="section__label">skills</span>
        <h2 className="section__title">What I work with</h2>
        <div className="section__rule" />
        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className={`skill-group__title skill-group__title--${group.color}`}>
                {group.category}
              </h3>
              <ul className="skill-group__list">
                {group.items.map((item) => (
                  <li key={item} className="skill-group__item">
                    <span className={`skill-dot skill-dot--${group.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
