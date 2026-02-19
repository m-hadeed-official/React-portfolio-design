import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-title">
            <h2>ABOUT ME</h2>
          </div>

          <div className="about-content">
            <h3 className="about-headline">
              I am a front-end developer based in Sydney. <br />
              Has Mechanical Engineering background.
            </h3>

            <p className="about-description">
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </p>

            <a href="#" className="btn-text">
              MORE ABOUT ME
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
