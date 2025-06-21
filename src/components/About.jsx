import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-badge">
              <i className="fas fa-user-tie"></i>
              <span>About Me</span>
            </div>
            <h2>Sanjana Bisht</h2>
            <p className="about-intro">
              A dedicated legal professional with comprehensive experience across diverse practice areas including
              corporate law, employment disputes, matrimonial cases, and compliance management. Committed to delivering
              strategic legal solutions while maintaining the highest standards of professional excellence.
            </p>
            <p>
              My approach combines thorough legal research with practical problem-solving skills, ensuring clients
              receive well-informed counsel tailored to their specific needs. I believe in building strong client
              relationships through clear communication, strategic thinking, and unwavering dedication to achieving
              favorable outcomes.
            </p>

            <div className="qualifications">
              <h3>
                <i className="fas fa-graduation-cap"></i>
                Education & Qualifications
              </h3>
              <ul>
                <li>
                  <i className="fas fa-university"></i>
                  Bachelor of Law (Ba.LL.B) - University Institute of Law and Management (2018-2023)
                </li>
                <li>
                  <i className="fas fa-scroll"></i>
                  Business/Commerce, General - S.D Memorial Senior Secondary School (2017-2018)
                </li>
                <li>
                  <i className="fas fa-certificate"></i>
                  Specialized Training in IP Law
                </li>
                <li>
                  <i className="fas fa-shield-alt"></i>
                  POSH (Prevention of Sexual Harassment) Certified Investigator
                </li>
                <li>
                  <i className="fas fa-briefcase"></i>
                  Corporate Governance & Compliance Specialist
                </li>
                <li>
                  <i className="fas fa-balance-scale"></i>
                  Employment Law & Labor Disputes Expert
                </li>
              </ul>
            </div>

            <div className="philosophy">
              <div className="philosophy-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <h3>My Philosophy</h3>
              <p>
                Legal excellence is achieved through meticulous preparation, strategic thinking, and genuine commitment
                to client success. Every case deserves thorough research, innovative solutions, and dedicated advocacy
                to ensure the best possible outcomes.
              </p>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Sanjana Bisht in her office"
              />
              <div className="experience-badge">
                <div className="badge-icon">
                  <i className="fas fa-medal"></i>
                </div>
                <span className="badge-number">3+</span>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </div>
            <div className="credentials">
              <div className="credential-item">
                <i className="fas fa-balance-scale"></i>
                <span>Licensed Attorney</span>
              </div>
              <div className="credential-item">
                <i className="fas fa-users"></i>
                <span>Client Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
