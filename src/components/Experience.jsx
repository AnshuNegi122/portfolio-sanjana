import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Legal Associate",
      company: "SPJ Advocates & Co.",
      period: "April 2024 - Jan 2025",
      description:
        "Experienced legal professional handling diverse legal matters including matrimonial disputes, company panel cases, employment law, and POSH investigations. Successfully managed corporate client representations and ensured strict compliance with legal standards.",
      icon: "fas fa-briefcase",
      highlights: ["Matrimonial Disputes", "Corporate Panel Cases", "Employment Law", "POSH Investigations"],
    },
    {
      title: "Legal Advisor",
      company: "AppOpener",
      period: "Oct 2023 - March 2024",
      description:
        "Managed key legal functions including corporate governance, risk management, and legal documentation. Conducted in-depth legal research and provided strategic counsel to tech executives while overseeing contract negotiations.",
      icon: "fas fa-laptop-code",
      highlights: ["Corporate Governance", "Risk Management", "Contract Negotiations", "Tech Startup Advisory"],
    },
    {
      title: "Legal Consultant",
      company: "LBS & Co.",
      period: "July 2023 - Sep 2023",
      description:
        "Provided end-to-end legal support with thorough research and compliance oversight. Worked closely with regulatory authorities and stakeholders to address legal matters efficiently while safeguarding company interests.",
      icon: "fas fa-handshake",
      highlights: ["Legal Research", "Compliance Management", "Regulatory Affairs", "Risk Mitigation"],
    },
    {
      title: "Legal Internship",
      company: "Legal Soch Foundation",
      period: "Aug 2022 - Sep 2022",
      description:
        "Engaged in article writing, debates, and case law analysis. Participated in debate competitions and pursued specialized IP law training, enhancing analytical and argumentative skills.",
      icon: "fas fa-pen-fancy",
      highlights: ["Article Writing", "Case Law Analysis", "IP Law Training", "Debate Competitions"],
    },
    {
      title: "Legal Internship",
      company: "Legalvise",
      period: "April 2022 - June 2022",
      description:
        "Gained practical exposure to court proceedings and legal research. Research paper was featured on company's social media highlights, recognizing contributions to legal scholarship.",
      icon: "fas fa-gavel",
      highlights: ["Court Proceedings", "Legal Research", "Published Research", "Practical Training"],
    },
    {
      title: "Legal Internship",
      company: "Janakraj and Associates",
      period: "Feb 2022 - Jan 2023",
      description:
        "Gained in-depth knowledge of filing property and criminal cases, handling real client scenarios, and analyzing court judgments. Developed practical understanding of legal procedures and client interactions.",
      icon: "fas fa-home",
      highlights: ["Property Law", "Criminal Cases", "Client Management", "Court Judgment Analysis"],
    },
  ]

  const stats = [
    {
      icon: "fas fa-briefcase",
      number: "6+",
      label: "Professional Positions",
    },
    {
      icon: "fas fa-building",
      number: "50+",
      label: "Corporate Cases Handled",
    },
    {
      icon: "fas fa-users",
      number: "80+",
      label: "Clients Served",
    },
    {
      icon: "fas fa-certificate",
      number: "95%",
      label: "Success Rate",
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-trophy"></i>
            <span>Professional Journey</span>
          </div>
          <h2>Professional Experience</h2>
          <p>A comprehensive track record of legal excellence across diverse practice areas and organizations</p>
        </div>

        <div className="experience-content">
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-icon">
                    <i className={exp.icon}></i>
                  </div>
                </div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header">
                      <h3>{exp.title}</h3>
                      <div className="company-info">
                        <span className="company">{exp.company}</span>
                        <span className="period">
                          <i className="fas fa-calendar"></i>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    <div className="experience-highlights">
                      {exp.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">
                          <i className="fas fa-check"></i>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
