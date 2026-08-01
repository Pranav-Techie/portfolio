import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-title">
        <p>FEATURED WORK</p>
        <h2>{"$ git log"}</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my skills in full-stack
          development, AI and modern web technologies.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            {/* Top Banner */}

            <div className={`project-banner ${project.gradient}`}>

              <h3>{project.title}</h3>

              <span>{project.subtitle}</span>

            </div>

            {/* Body */}

            <div className="project-body">

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">

                {project.tech.map((tech) => (

                  <span key={tech}>{tech}</span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}