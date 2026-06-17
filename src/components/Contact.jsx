import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="section__inner">
        <span className="section__label">contact</span>
        <h2 className="section__title">Let's work together</h2>
        <div className="section__rule" />
        <div className="contact__box">
          <p className="contact__text">
            I'm actively looking for junior developer roles. If you think I'd
            be a good fit for your team, I'd love to hear from you — even just
            to chat. Based in the Philippines, open to remote work or local
            opportunities in Metro Manila.
          </p>
          <div className="contact__links">
            <a href={`mailto:${personal.email}`} className="contact-link">
              ✉ {personal.email}
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
              🐙 github.com/fritz
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              👤 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
