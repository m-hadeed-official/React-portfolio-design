import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            HI, I AM <br /> ROBERT GARCIA.
          </h1>
          <p>
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </p>

          <div className="cta-group">
            <a href="#" className="btn-primary">
              CONTACT ME <span className="dot"></span>
            </a>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="src/assets/profile-img.png" alt="Robert Garcia" />
        </div>
      </section>
    </>
  );
};

export default Hero;
