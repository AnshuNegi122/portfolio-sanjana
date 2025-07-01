import "./Services.css"

const Services = () => {
  const services = [
    {
      title: "Corporate Legal Matters",
      description:
        "Expert legal solutions for business formation, compliance, mergers, acquisitions, and governance.",
      icon: "fas fa-building",
      features: ["Business Formation", "Corporate Compliance", "Mergers & Acquisitions"],
    },
    {
      title: "Matrimonial Matters",
      description:
        "Personalized legal assistance for marriage registration, separation agreements, and spousal rights.",
      icon: "fas fa-ring",
      features: ["Marriage Registration", "Separation Agreements", "Spousal Support"],
    },
    {
      title: "Civil Litigation",
      description:
        "Comprehensive representation in complex civil disputes, contract breaches, and commercial litigation matters.",
      icon: "fas fa-gavel",
      features: ["Contract Disputes", "Business Litigation", "Property Disputes"],
    },
    {
      title: "Personal Injury",
      description: "Dedicated advocacy for accident victims, ensuring maximum compensation for injuries and damages.",
      icon: "fas fa-user-injured",
      features: ["Auto Accidents", "Medical Malpractice", "Slip & Fall"],
    },
    {
      title: "Employment Law",
      description:
        "Protecting workers' rights in cases of discrimination, wrongful termination, and workplace harassment.",
      icon: "fas fa-briefcase",
      features: ["Wrongful Termination", "Discrimination", "Wage Disputes"],
    },
    {
      title: "Family Law",
      description: "Compassionate guidance through divorce, custody disputes, and family-related legal matters.",
      icon: "fas fa-home",
      features: ["Divorce Proceedings", "Child Custody", "Alimony"],
    },
    {
      title: "Criminal Defense",
      description: "Aggressive defense strategies for criminal charges, protecting your freedom and reputation.",
      icon: "fas fa-shield-alt",
      features: ["DUI Defense", "White Collar Crime", "Appeals"],
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning services to protect your assets and secure your family's future.",
      icon: "fas fa-file-contract",
      features: ["Wills & Trusts", "Probate", "Asset Protection"],
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-briefcase"></i>
            <span>Legal Services</span>
          </div>
          <h2>Comprehensive Legal Representation</h2>
          <p>Expert legal services across multiple practice areas with a proven track record of success</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-btn">
                <i className="fas fa-arrow-right"></i>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
