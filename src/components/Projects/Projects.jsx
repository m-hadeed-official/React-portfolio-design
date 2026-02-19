import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <div className="projects-header">
          <h2>FEATURED PROJECTS</h2>
          <p>
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        <div className="projects-list">
          <article className="project-card">
            <div className="project-image">
              <span className="badge">Conceptual Work</span>
              <img
                src="src/assets/sneakers-profile-img.png"
                alt="Promotional landing page"
              />
            </div>
            <div className="project-info">
              <h3>Promotional landing page for our favorite show</h3>
              <p>
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities.
              </p>

              <div className="project-meta">
                <p className="meta-label">PROJECT INFO</p>
                <div className="meta-row">
                  <span>Year</span> <span>2023</span>
                </div>
                <div className="meta-row">
                  <span>Role</span> <span>Front-end Developer</span>
                </div>
              </div>

              <div className="project-links">
                <a href="#" className="link-btn">
                  LIVE DEMO <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="#" className="link-btn">
                  SEE ON GITHUB <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img src="src/assets/w-project-img.png" alt="Blog site" />
            </div>
            <div className="project-info">
              <h3>Blog site for World News</h3>
              <p>
                Mastered CSS Grid complexities in building an innovative news
                homepage, navigating intricate design decisions for a seamless
                user experience.
              </p>

              <div className="project-meta">
                <p className="meta-label">PROJECT INFO</p>
                <div className="meta-row">
                  <span>Client</span> <span>World News</span>
                </div>
                <div className="meta-row">
                  <span>Year</span> <span>2022</span>
                </div>
                <div className="meta-row">
                  <span>Role</span> <span>Front-end Developer</span>
                </div>
              </div>

              <div className="project-links">
                <a href="#" className="link-btn">
                  VIEW PROJECT <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Projects;
