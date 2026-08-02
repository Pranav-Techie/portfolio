import experience from "../data/experience";

export default function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-title">
        <p>EXPERIENCE</p>
        <h2>{"04 / JOURNEY"}</h2>
        <p className="section-subtitle">
          My professional journey, internships and learning experiences.
        </p>
      </div>

      <div className="experience-list">

        {experience.map((item, index) => (

          <div className="experience-item" key={index}>

            <div className="timeline">
              <div
                className={`timeline-dot ${
                  item.year === "Present" ? "present" : ""
                }`}
              ></div>
            </div>

            <div className="experience-card">

              <div
                className={`experience-year ${
                  item.year === "Present" ? "present" : ""
                }`}
              >
                {item.year}
              </div>

              <div className="experience-content">

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

                <div className="experience-tech">
                  {item.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}