"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message. I will get back to you within 24 hours.")
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Law office background"
        />
        <div className="contact-overlay"></div>
      </div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-envelope"></i>
            <span>Get In Touch</span>
          </div>
          <h2>Schedule Your Consultation</h2>
          <p>Ready to discuss your legal needs? Contact me today for a confidential consultation</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>
              <i className="fas fa-info-circle"></i>
              Contact Information
            </h3>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Office Address</h4>
                <p>
                  Hall no 6, Near Court no 8, District & Sessions
                  Court, Gurgaon, HR 122001
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p> +91 96505 35768 </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>advocatesanjanabisht@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h4>Office Hours</h4>
                <p>
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>
                <i className="fas fa-paper-plane"></i>
                Send a Message
              </h3>
              <p>Fill out the form below and I'll get back to you promptly</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <i className="fas fa-phone"></i>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Brief subject of your inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe your legal matter in detail..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
