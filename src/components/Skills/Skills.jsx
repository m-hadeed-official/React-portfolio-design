import "./Skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="skills-container">
          <div className="skills-title">
            <h2>MY SKILLS</h2>
          </div>

          <div className="skills-content ">
            <p className="skills-description">
              I am always looking to learn and improve my craft. Currently, I
              specialize in building modern, performant, and accessible web
              applications using these core technologies:
            </p>

            <div className="skills-grid">
              <div className="skill-card">
                <h3>HTML</h3>
              </div>
              <div className="skill-card">
                <h3>CSS</h3>
              </div>
              <div className="skill-card">
                <h3>JAVASCRIPT</h3>
              </div>
              <div className="skill-card">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
