import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="contact lower">
        <div className="contact-container">
          <div className="contact-main">
            <div className="contact-info">
              <h2>LET'S CONNECT</h2>

              <div className="contact-info-para">
                <p className="contact-text">
                  Say hello at: <br />
                  <a
                    href="mailto:robertgarcia@gmail.com"
                    className="highlight-link"
                  >
                    robertgarcia@gmail.com
                  </a>
                </p>

                <p className="contact-text">
                  For more info, here's my: <br />
                  <a href="#" className="highlight-link">
                    resume
                  </a>
                </p>
              </div>

              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="contact-image">
              <img
                src="src/assets/profile-img.png"
                alt="Robert Garcia Profile"
              />
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 Robert Garcia</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
