"use client"

import "./Hero.css"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <i className="fas fa-award"></i>
              <span>Experienced Legal Professional</span>
            </div>
            <h1>Strategic Legal Solutions You Can Trust</h1>
            <p className="hero-subtitle">
              Dedicated legal professional with comprehensive experience in corporate law, employment disputes,
              matrimonial cases, and compliance management. Committed to delivering strategic solutions with proven
              results.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <span className="stat-number">100+</span>
                <span className="stat-label">Cases Handled</span>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                <i className="fas fa-calendar-check"></i>
                Schedule Consultation
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
              >
                <i className="fas fa-info-circle"></i>
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional Legal Advocate"
              />
              <div className="image-badge">
                <i className="fas fa-shield-alt"></i>
                <span>Trusted Legal Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
